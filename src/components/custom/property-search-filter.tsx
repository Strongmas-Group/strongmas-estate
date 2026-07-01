"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/properties";
import Image from "next/image";
import Link from "next/link";
import { XCircle, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Property {
  name: string;
  status: string;
  location: string;
  tag?: string;
  images: string[];
  summary: {
    address: string;
    propertyType: string;
    typology?: string;
    garage?: number;
    totalUnits?: number;
    saleStatus: string;
    project?: string;
    units?: string;
    carSpacePerUnit?: number;
    availableUnits?: any;
  };
  description: string;
  keyFeatures?: string[];
  features?: string[];
  availableUnits?: {
    type: string;
    bathrooms?: number;
    carSpace?: number;
    saleStatus: string;
    price?: string;
    cinemaRoom?: boolean;
    serviceQuarters?: number;
    kitchens?: number;
    features?: string[];
  }[];
  proximities?: string[];
}

const FilterSelectItem = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col items-start gap-0.5 px-2 py-1 h-full justify-center w-full">
    <span className="text-xs text-gray-400">{label}</span>
    {children}
  </div>
);

const PropertySearchFilter = () => {
  const [location, setLocation] = useState("All locations");
  const [propertyType, setPropertyType] = useState("Any");
  const [bedrooms, setBedrooms] = useState("Any");
  const [price, setPrice] = useState("Any");
  const [searchTerm, setSearchTerm] = useState(""); // New state for mobile search input

  const [filteredResults, setFilteredResults] = useState<Property[]>([]);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const locations = [...new Set(properties.map((p) => p.location).filter(Boolean))];
  const propertyTypes = [...new Set(properties.map((p) => p.summary.propertyType).filter(Boolean))];
  const bedroomOptions = ["Any", "1", "2", "3", "4", "5+"];
  const priceOptions = ["Any", "Under ₦50M", "₦50M - ₦100M", "₦100M - ₦200M", "Over ₦200M"];

  const applyFilters = () => {
    setSearchInitiated(true);

    let currentFiltered = [...properties];

    if (searchTerm.trim() !== "") {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentFiltered = currentFiltered.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          p.location.toLowerCase().includes(lowerCaseSearchTerm) ||
          p.summary.propertyType.toLowerCase().includes(lowerCaseSearchTerm) ||
          (p.summary.project && p.summary.project.toLowerCase().includes(lowerCaseSearchTerm)) ||
          (p.tag && p.tag.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }
    // Logic for desktop dropdown filters
    else {
      const isDefaultState =
        location === "All locations" &&
        propertyType === "Any" &&
        bedrooms === "Any" &&
        price === "Any";
      if (isDefaultState) {
        setFilteredResults([]);
        return;
      }

      if (location !== "All locations") {
        currentFiltered = currentFiltered.filter((p) => p.location === location);
      }

      if (propertyType !== "Any") {
        currentFiltered = currentFiltered.filter((p) => p.summary.propertyType === propertyType);
      }

      if (bedrooms !== "Any") {
        currentFiltered = currentFiltered.filter((p) => {
          const targetBedrooms = bedrooms === "5+" ? 5 : parseInt(bedrooms);

          if (p.summary.typology) {
            const typologyBedroomsMatch = p.summary.typology.match(/(\d)-Bedroom/);
            if (typologyBedroomsMatch) {
              const numBedrooms = parseInt(typologyBedroomsMatch[1]);
              if (bedrooms === "5+") {
                if (numBedrooms >= targetBedrooms) return true;
              } else {
                if (numBedrooms === targetBedrooms) return true;
              }
            }
          }
          if (p.availableUnits) {
            return p.availableUnits.some((unit) => {
              if (unit.type) {
                const unitBedroomsMatch = unit.type.match(/(\d)-Bedroom/);
                if (unitBedroomsMatch) {
                  const unitNumBedrooms = parseInt(unitBedroomsMatch[1]);
                  if (bedrooms === "5+") {
                    return unitNumBedrooms >= targetBedrooms;
                  }
                  return unitNumBedrooms === targetBedrooms;
                }
              }
              return false;
            });
          }
          return false;
        });
      }

      if (price !== "Any") {
        currentFiltered = currentFiltered.filter((p) => {
          if (!p.availableUnits || p.availableUnits.length === 0) return false;

          const unitPrices = p.availableUnits
            .map((unit) => {
              if ("price" in unit && unit.price !== "Not Available") {
                const cleanedPrice = unit.price.replace(/[₦,]/g, "");
                return parseInt(cleanedPrice, 10);
              }
              return null;
            })
            .filter(Boolean) as number[];

          if (unitPrices.length === 0) return false;

          switch (price) {
            case "Under ₦50M":
              return unitPrices.some((unitPrice) => unitPrice < 50_000_000);
            case "₦50M - ₦100M":
              return unitPrices.some(
                (unitPrice) => unitPrice >= 50_000_000 && unitPrice <= 100_000_000
              );
            case "₦100M - ₦200M":
              return unitPrices.some(
                (unitPrice) => unitPrice >= 100_000_000 && unitPrice <= 200_000_000
              );
            default:
              return unitPrices.some((unitPrice) => unitPrice > 200_000_000);
          }
        });
      }
    }

    setFilteredResults(currentFiltered as Property[]);
  };

  const clearFilters = () => {
    setLocation("All locations");
    setPropertyType("Any");
    setBedrooms("Any");
    setPrice("Any");
    setSearchTerm(""); // Clear mobile search term
    setFilteredResults([]);
    setSearchInitiated(false); // Hide the results section
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-2 py-0 relative z-40">
      {/* Desktop Filter UI */}
      <div className="hidden md:block mx-auto pl-1 bg-black/30 backdrop-blur-xs rounded-full w-full max-w-[758px] lg:max-w-[1440px] border border-white/20 relative mb-0">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between w-full p-2 md:p-0">
          <div className="w-full md:flex-1 py-1 md:py-0">
            <FilterSelectItem label="Search by Location">
              <Select onValueChange={setLocation} value={location}>
                <SelectTrigger className="w-full bg-transparent border-none text-white text-sm font-bold p-0 h-auto focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="All locations" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border text-white">
                  <SelectItem value="All locations">All locations</SelectItem>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FilterSelectItem>
          </div>

          <Separator orientation="vertical" className="hidden md:block h-8 bg-white/20" />
          <Separator orientation="horizontal" className="w-full h-[1px] bg-white/20 md:hidden" />

          <div className="hidden md:flex md:flex-1 py-1 md:py-0">
            <FilterSelectItem label="Property Type">
              <Select onValueChange={setPropertyType} value={propertyType}>
                <SelectTrigger className="w-full bg-transparent border-none text-white text-sm font-bold p-0 h-auto focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border text-white">
                  <SelectItem value="Any">Any</SelectItem>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FilterSelectItem>
          </div>

          <Separator orientation="vertical" className="hidden md:block h-8 bg-white/20" />
          <Separator orientation="horizontal" className="w-full h-[1px] bg-white/20 md:hidden" />

          <div className="hidden md:flex md:flex-1 py-1 md:py-0">
            <FilterSelectItem label="Bedrooms">
              <Select onValueChange={setBedrooms} value={bedrooms}>
                <SelectTrigger className="w-full bg-transparent border-none text-white text-sm font-bold p-0 h-auto focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border text-white">
                  {bedroomOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FilterSelectItem>
          </div>

          <Separator orientation="vertical" className="hidden md:block h-8 bg-white/20" />
          <Separator orientation="horizontal" className="w-full h-[1px] bg-white/20 md:hidden" />

          <div className="hidden md:flex md:flex-1 py-1 md:py-0">
            <FilterSelectItem label="Price">
              <Select onValueChange={setPrice} value={price}>
                <SelectTrigger className="w-full bg-transparent border-none text-white text-sm font-bold p-0 h-auto focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border text-white">
                  {priceOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FilterSelectItem>
          </div>

          <div className="w-full md:flex-1 px-1 flex flex-row md:flex-row gap-2 items-center justify-end md:justify-center pt-2 md:pt-0 pb-2 md:pb-0">
            <Button
              onClick={applyFilters}
              className="hidden md:block w-full bg-white text-black hover:bg-white/90 rounded-full font-bold text-xs px-4 py-2 h-auto"
            >
              SHOW ALL RESULTS
            </Button>
            {(location !== "All locations" ||
              propertyType !== "Any" ||
              bedrooms !== "Any" ||
              price !== "Any" ||
              searchInitiated) && (
              <Button
                onClick={clearFilters}
                variant="ghost"
                size="icon"
                className="hidden md:block text-white hover:bg-white/10 hover:text-white"
                title="Clear Search"
              >
                <XCircle className="h-6 w-6" />
                <span className="sr-only">Clear search filters</span>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden mx-auto bg-black/30 backdrop-blur-xs rounded-full w-full border border-white/20 relative mb-0">
        <div className="flex items-center w-full px-2 py-2">
          <input
            type="text"
            placeholder="Search by City, Community or Project"
            className="flex-grow pl-3 pr-20 py-2 bg-transparent text-white placeholder-gray-300 outline-none rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                applyFilters();
              }
            }}
          />
          {searchTerm && (
            <button
              onClick={clearFilters}
              className="absolute right-12 top-1/2 -translate-y-1/2 text-white p-1 rounded-full hover:bg-white/20 z-10"
              aria-label="Clear search"
            >
              <XCircle className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={applyFilters}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {searchInitiated && (
        <div className="bg-white mt-5 py-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">
            {filteredResults.length > 0
              ? `Found ${filteredResults.length} ${filteredResults.length > 1 ? "Properties" : "Property"}`
              : "No Properties Found"}
          </h2>
          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
              {filteredResults.map((property) => (
                <div
                  key={property.name}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src={property.images[0] || "/placeholder-property.jpg"}
                      alt={property.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-black mb-2 line-clamp-2">
                      {property.name}
                    </h3>
                    <p className="text-gray-700 text-sm mb-1">{property.location}</p>
                    <p className="text-gray-600 text-sm mb-4">{property.summary.propertyType}</p>
                    <Link
                      href={`/properties/${property.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="mt-4 w-full"
                    >
                      <Button className="w-full bg-primary text-white hover:bg-primary/90">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600">
                No properties found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertySearchFilter;
