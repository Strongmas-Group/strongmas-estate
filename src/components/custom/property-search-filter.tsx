
"use client";

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { properties } from '@/lib/properties';
import { useRouter } from 'next/navigation';

const PropertySearchFilter = () => {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const locations = [...new Set(properties.map(p => p.location))];
  const propertyTypes = [...new Set(properties.map(p => p.property_type))];

  const handleSearch = () => {
    // Since we don't have a dedicated search results page,
    // this will just log the selections for now.
    // In a real application, you'd navigate to a search page with query params.
    console.log('Searching for:', { location, propertyType });
    // Example navigation:
    // router.push(`/search?location=${location}&type=${propertyType}`);
  };

  return (
    <div className="mt-8 p-4 bg-black/50 rounded-lg w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <Select onValueChange={setLocation}>
          <SelectTrigger className="w-full bg-background border-border text-white">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent className="bg-background border-border text-white">
            {locations.map(loc => (
              <SelectItem key={loc} value={loc}>{loc}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setPropertyType}>
          <SelectTrigger className="w-full bg-background border-border text-white">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent className="bg-background border-border text-white">
            {propertyTypes.map(type => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleSearch} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Search
        </Button>
      </div>
    </div>
  );
};

export default PropertySearchFilter;
