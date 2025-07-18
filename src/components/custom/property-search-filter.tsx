"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { MapPin, Home, BedDouble, DollarSign, Search } from "lucide-react";

const PropertySearchFilter = () => {
  return (
    <Card className="bg-background/80 backdrop-blur-sm border-accent/20 shadow-lg">
      <CardContent className="p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center mb-2">
              <MapPin className="w-4 h-4 mr-2 text-accent" /> Location
            </label>
            <Input type="text" placeholder="e.g. New York, USA" />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground flex items-center mb-2">
              <Home className="w-4 h-4 mr-2 text-accent" /> Property Type
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground flex items-center mb-2">
              <BedDouble className="w-4 h-4 mr-2 text-accent" /> Bedrooms
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4+">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full md:w-auto flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium text-muted-foreground flex items-center mb-2">
            <DollarSign className="w-4 h-4 mr-2 text-accent" /> Price Range
          </label>
          <Slider
            defaultValue={[250000, 750000]}
            max={1000000}
            step={10000}
            className="my-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$0</span>
            <span>$1,000,000+</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertySearchFilter;
