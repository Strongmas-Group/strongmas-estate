
"use client";

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { properties } from '@/lib/properties';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

const FilterSelectItem = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div className="flex flex-col items-start gap-1 p-2 h-full justify-center w-full">
      <span className="text-xs text-gray-400">{label}</span>
      {children}
    </div>
);

const PropertySearchFilter = () => {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [price, setPrice] = useState('');

  const locations = [...new Set(properties.map(p => p.location).filter(Boolean))];
  const propertyTypes = [...new Set(properties.map(p => p.summary.propertyType).filter(Boolean))];
  const bedroomOptions = ["Any", "1", "2", "3", "4", "5+"];
  const priceOptions = ["Any", "Under ₦50M", "₦50M - ₦100M", "₦100M - ₦200M", "Over ₦200M"];


  const handleSearch = () => {
    console.log('Searching for:', { location, propertyType, bedrooms, price });
  };

  return (
    <div className="p-4 md:p-2 bg-black/60 backdrop-blur-sm rounded-2xl md:rounded-full w-full max-w-md md:max-w-4xl lg:max-w-7xl mx-auto border border-white/20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
        
        <div className="w-full md:flex-1">
            <FilterSelectItem label="Search by Location">
                <Select onValueChange={setLocation} defaultValue="All locations">
                    <SelectTrigger className="w-full bg-transparent border-none text-white text-sm font-bold p-0 h-auto focus:ring-0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border text-white">
                        <SelectItem value="All locations">All locations</SelectItem>
                        {locations.map(loc => (
                        <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </FilterSelectItem>
        </div>

        <Separator orientation="vertical" className="h-6 bg-white/20 hidden md:block" />

        <div className="w-full md:flex-1">
            <FilterSelectItem label="Property Type">
                <Select onValueChange={setPropertyType} defaultValue="Any">
                    <SelectTrigger className="w-full bg-transparent border-none text-white text-sm font-bold p-0 h-auto focus:ring-0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border text-white">
                        <SelectItem value="Any">Any</SelectItem>
                        {propertyTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </FilterSelectItem>
        </div>

        <Separator orientation="vertical" className="h-6 bg-white/20 hidden md:block" />
        
        <div className="w-full md:flex-1">
            <FilterSelectItem label="Bedrooms">
                <Select onValueChange={setBedrooms} defaultValue="Any">
                    <SelectTrigger className="w-full bg-transparent border-none text-white text-sm font-bold p-0 h-auto focus:ring-0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border text-white">
                        {bedroomOptions.map(opt => (
                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </FilterSelectItem>
        </div>
        
        <Separator orientation="vertical" className="h-6 bg-white/20 hidden md:block" />
        
        <div className="w-full md:flex-1">
            <FilterSelectItem label="Price">
                <Select onValueChange={setPrice} defaultValue="Any">
                    <SelectTrigger className="w-full bg-transparent border-none text-white text-sm font-bold p-0 h-auto focus:ring-0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border text-white">
                        {priceOptions.map(opt => (
                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </FilterSelectItem>
        </div>
        
        <Separator orientation="vertical" className="h-6 bg-white/20 hidden md:block" />
        
        <div className="w-full md:flex-1 md:px-0">
            <Button onClick={handleSearch} className="w-full bg-white text-black hover:bg-white/90 rounded-full font-bold text-xs px-4 py-3 h-auto">
                SHOW ALL RESULTS
            </Button>
        </div>

      </div>
    </div>
  );
};

export default PropertySearchFilter;
