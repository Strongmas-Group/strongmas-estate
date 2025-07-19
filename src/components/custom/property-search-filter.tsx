"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Home, BedDouble, DollarSign, Search } from "lucide-react";

const PropertySearchFilter = () => {
  return (
    <Card className="bg-background/80 backdrop-blur-sm border-accent/20 shadow-lg">
      <CardContent className="p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="lg:col-span-1">
            <label className="text-sm font-medium text-muted-foreground flex items-center mb-2">
              <MapPin className="w-4 h-4 mr-2 text-accent" /> Location
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="miami">Miami</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
              </SelectContent>
            </Select>
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
                <SelectItem value="any">Any</SelectItem>
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
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4+">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground flex items-center mb-2">
              <DollarSign className="w-4 h-4 mr-2 text-accent" /> Price
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="<2m">&lt; $2,000,000</SelectItem>
                <SelectItem value="2m-5m">$2,000,000 - $5,000,000</SelectItem>
                <SelectItem value=">5m">&gt; $5,000,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full lg:w-auto flex items-center gap-2">
            <Search className="w-4 h-4" />
            Show Result
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertySearchFilter;
