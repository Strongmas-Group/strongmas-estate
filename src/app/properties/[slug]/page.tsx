
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
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function PropertyPage() {
  const params = useParams();
  const slug = params.slug;

  const property = properties.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const [mainImage, setMainImage] = React.useState(property?.images?.[0] || "");

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
  
  const allFeatures = [
      ...(property.signatureAmenities || []),
      ...(property.keyFeatures || []),
      ...(property.features || []),
      ...(property.safetyAndSecurity || [])
    ].filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative h-[50vh] bg-black text-white">
            {mainImage && (
                <Image
                    src={mainImage}
                    alt={property.name}
                    fill
                    className="object-cover opacity-60"
                />
            )}
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-full flex flex-col justify-end container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <p className="text-sm text-gray-300">
                    <Link href="/" className="hover:underline">Home</Link> /{" "}
                    <Link href="/#featured" className="hover:underline">Our Properties</Link> / {" "}
                    <span className="font-medium text-white">Property Details</span>
                </p>
                <div className="flex items-center gap-4 mt-2">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">{property.name}</h1>
                </div>
                <p className="text-gray-300 mt-2">{property.summary?.address}</p>
            </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
                {mainImage && (
                    <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-4">
                        <Image
                        src={mainImage}
                        alt={property.name}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out"
                        />
                    </div>
                )}
               {property.images && property.images.length > 1 && (
                    <div className="grid grid-cols-5 gap-2 md:gap-4">
                        {property.images.slice(0, 5).map((img, index) => (
                        <div
                            key={index}
                            className={`relative w-full h-16 md:h-24 rounded-md overflow-hidden cursor-pointer border-2 ${mainImage === img ? 'border-[#142B54]' : 'border-transparent'}`}
                            onClick={() => handleThumbnailClick(img)}
                        >
                            <Image
                            src={img}
                            alt={`${property.name} thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            />
                        </div>
                        ))}
                    </div>
               )}
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg h-fit">
              <h2 className="text-2xl font-bold font-headline mb-6 text-black">Property Summary</h2>
              <div className="space-y-4 text-sm">
                 {Object.entries(property.summary).map(([key, value]) => {
                     if (key === 'brochureUrl') return null;
                     const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                     return (
                        <div className="flex justify-between" key={key}>
                            <span className="font-medium text-black">{formattedKey}:</span>
                            <span className="text-gray-600 text-right">{String(value)}</span>
                        </div>
                     )
                 })}
              </div>
              {property.summary.brochureUrl && (
                 <Button asChild size="lg" className="w-full mt-8 bg-[#142B54] text-white hover:bg-[#142B54]/90 font-headline">
                    <Link href={property.summary.brochureUrl} target="_blank" rel="noopener noreferrer">
                        DOWNLOAD BROCHURE
                    </Link>
                 </Button>
              )}
            </div>
          </div>

          <div className="py-12 md:py-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="bg-gray-100 text-black">
                <TabsTrigger value="description">Description</TabsTrigger>
                {property.availableUnits && <TabsTrigger value="units">Available Units</TabsTrigger>}
                {property.proximities && <TabsTrigger value="proximities">Proximities</TabsTrigger>}
                {property.floorPlan && <TabsTrigger value="floor-plan">Floor Plan</TabsTrigger>}
              </TabsList>
              <TabsContent value="description" className="pt-8">
                <p className="text-gray-600 leading-relaxed max-w-4xl">
                  {property.description}
                </p>
              </TabsContent>
               {property.availableUnits && (
                 <TabsContent value="units" className="pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {property.availableUnits.map((unit, index) => (
                            <div key={index} className="p-4 border rounded-lg">
                                <h4 className="font-bold text-lg">{unit.type}</h4>
                                {Object.entries(unit).filter(([key]) => key !== 'type').map(([key, value]) => (
                                     <div className="flex justify-between text-sm mt-2" key={key}>
                                        <span className="font-medium text-black">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                                        <span className="text-gray-600">{String(value)}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </TabsContent>
               )}
                {property.proximities && (
                    <TabsContent value="proximities" className="pt-8">
                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {property.proximities.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                         </div>
                    </TabsContent>
                )}
                 {property.floorPlan && (
                    <TabsContent value="floor-plan" className="pt-8">
                         <div className="space-y-4">
                            {property.floorPlan.map((item, index) => (
                                <div key={index} className="p-4 border rounded-lg">
                                    <h4 className="font-bold text-lg">{item.floor}</h4>
                                    <p className="text-gray-600">{item.use}</p>
                                </div>
                            ))}
                         </div>
                    </TabsContent>
                )}
            </Tabs>
          </div>
        </div>

        {allFeatures.length > 0 && (
            <section className="py-16 sm:py-24 bg-gray-50 font-sans">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Features</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {allFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <p className="text-gray-700">{typeof feature === 'string' ? feature : feature.feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}


      </main>
      <Footer />
    </div>
  );
}
