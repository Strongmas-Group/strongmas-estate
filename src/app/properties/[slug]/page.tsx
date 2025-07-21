
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { notFound, useParams } from "next/navigation";

export default function PropertyPage() {
  const params = useParams();
  const slug = params.slug;

  const property = properties.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const [mainImage, setMainImage] = React.useState(property?.images[0] || "");

  React.useEffect(() => {
    if (property) {
      setMainImage(property.images[0]);
    }
  }, [property]);

  if (!property) {
    return notFound();
  }

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const featureImages = property.images.slice(1, 5);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">
              <Link href="/" className="hover:underline">Home</Link> /{" "}
              <Link href="/#featured" className="hover:underline">Browse Properties</Link> / {" "}
              <span className="font-medium">Property Details</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2">{property.name}</h1>
            <p className="text-muted-foreground mt-2">{property.location}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={mainImage}
                  alt={property.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="grid grid-cols-5 gap-2 md:gap-4">
                {property.images.slice(0, 5).map((img, index) => (
                  <div
                    key={index}
                    className={`relative w-full h-16 md:h-24 rounded-md overflow-hidden cursor-pointer border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => handleThumbnailClick(img)}
                  >
                    <Image
                      src={img}
                      alt={`${property.name} thumbnail ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg h-fit">
              <h2 className="text-2xl font-bold font-headline mb-6">Property Summary</h2>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span className="text-muted-foreground text-right">{property.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Property Type:</span>
                  <span className="text-muted-foreground text-right">{property.property_type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span className="text-muted-foreground text-right">For Sale</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Beds:</span>
                  <span className="text-muted-foreground text-right">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Bathroom:</span>
                  <span className="text-muted-foreground text-right">4.5</span>
                </div>
                 <div className="flex justify-between">
                  <span className="font-medium">Car Space Per Unit:</span>
                  <span className="text-muted-foreground text-right">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Available Units:</span>
                  <span className="text-muted-foreground text-right">4</span>
                </div>
              </div>
              <Button size="lg" className="w-full mt-8 bg-[#142B54] text-white hover:bg-[#142B54]/90 font-headline">
                DOWNLOAD BROCHURE
              </Button>
            </div>
          </div>

          <div className="py-12 md:py-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="border-b border-gray-200">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="floor-plans">Floor Plans</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-8">
                <p className="text-muted-foreground leading-relaxed max-w-4xl mb-12">
                  {property.description}
                </p>
                <h3 className="text-3xl font-bold font-headline mb-8">Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featureImages.map((img, index) => (
                        <div key={index} className="relative h-56 w-full rounded-lg overflow-hidden">
                             <Image
                                src={img}
                                alt={`Feature image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 ease-in-out hover:scale-105"
                                data-ai-hint="modern interior design"
                             />
                        </div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="video" className="pt-8">
                <p>Video content coming soon.</p>
              </TabsContent>
              <TabsContent value="floor-plans" className="pt-8">
                 <p>Floor plans coming soon.</p>
              </TabsContent>
              <TabsContent value="location" className="pt-8">
                 <p>Location details coming soon.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
