
"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";

const FilterItem = ({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col gap-1 p-4", className)}>
    <label className="text-xs text-white/70">{label}</label>
    {children}
  </div>
);

const SearchFilters = () => (
    <>
        <FilterItem label="Search by Location">
          <Select defaultValue="all">
            <SelectTrigger className="border-none p-0 h-auto bg-transparent text-white font-bold text-[11px] focus:ring-0 focus:ring-offset-0 font-sans">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="miami">Miami</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
            </SelectContent>
          </Select>
        </FilterItem>

        <FilterItem label="Property Type" className="md:border-l border-t md:border-t-0 border-white/20">
          <Select defaultValue="any">
            <SelectTrigger className="border-none p-0 h-auto bg-transparent text-white font-bold text-[11px] focus:ring-0 focus:ring-offset-0 font-sans">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>
        </FilterItem>

        <FilterItem label="Bedrooms" className="md:border-l border-t md:border-t-0 border-white/20">
          <Select defaultValue="any">
            <SelectTrigger className="border-none p-0 h-auto bg-transparent text-white font-bold text-[11px] focus:ring-0 focus:ring-offset-0 font-sans">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4+">4+</SelectItem>
            </SelectContent>
          </Select>
        </FilterItem>

        <FilterItem label="Price" className="md:border-l border-t md:border-t-0 border-white/20">
          <Select defaultValue="any">
            <SelectTrigger className="border-none p-0 h-auto bg-transparent text-white font-bold text-[11px] focus:ring-0 focus:ring-offset-0 font-sans">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="<2m">&lt; $2,000,000</SelectItem>
              <SelectItem value="2m-5m">$2,000,000 - $5,000,000</SelectItem>
              <SelectItem value=">5m">&gt; $5,000,000</SelectItem>
            </SelectContent>
          </Select>
        </FilterItem>
    </>
);

const PropertySearchFilter = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden">
         <Sheet>
            <SheetTrigger asChild>
                <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 rounded-full font-bold tracking-wider text-[11px] h-12">
                    <Filter className="mr-2 h-5 w-5" />
                    Filters
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-background text-white rounded-t-lg">
                <SheetHeader>
                    <SheetTitle className="text-white">Filter Properties</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                     <div className="flex flex-col">
                        <SearchFilters />
                        <div className="p-4 border-t border-white/20">
                            <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 rounded-full font-bold tracking-wider text-xs h-12">
                                SHOW ALL RESULTS
                            </Button>
                        </div>
                    </div>
                </div>
            </SheetContent>
         </Sheet>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block bg-black/40 backdrop-blur-md rounded-full border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center">
            <SearchFilters />
          <div className="p-2 md:border-l border-t md:border-t-0 border-white/20">
            <Button
              size="lg"
              className="w-full bg-white text-black hover:bg-white/90 rounded-full font-bold tracking-wider text-[11px] h-12"
            >
              SHOW ALL RESULTS
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertySearchFilter;
