
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

const features = [
  {
    title: "24 Hours Power",
    description: "Uninterrupted electricity supply, day and night.",
    image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753124462/haayhbmjsiw1kmlkh4sf.png",
    hint: "light",
  },
  {
    title: "Treated Water",
    description: "Clean, filtered water for everyday use.",
    image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753124309/h9mrgo6iamzb5ebwsu5p.png",
    hint: "Water",
  },
  {
    title: "Integrated Sound System",
    description: "Built-in audio system for immersive sound.",
    image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753124779/plelo3mr7ibqqk5eefwv.png",
    hint: "integrated sound",
  },
  {
    title: "Service Quarters",
    description: "Dedicated living space for domestic staff.",
    image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753124831/ifjoxdvb3vx8tuujdice.png",
    hint: "service quarter",
  },
];


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

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative h-[50vh] bg-black text-white">
            <Image
                src={mainImage}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                className="opacity-60"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-full flex flex-col justify-end container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <p className="text-sm text-gray-300">
                    <Link href="/" className="hover:underline">Home</Link> /{" "}
                    <Link href="/#featured" className="hover:underline">Our Properties</Link> / {" "}
                    <span className="font-medium text-white">Property Details</span>
                </p>
                <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2">{property.name}</h1>
                <p className="text-gray-300 mt-2">{property.location}</p>
            </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                    className={`relative w-full h-16 md:h-24 rounded-md overflow-hidden cursor-pointer border-2 ${mainImage === img ? 'border-[#142B54]' : 'border-transparent'}`}
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
              <h2 className="text-2xl font-bold font-headline mb-6 text-black">Property Summary</h2>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-black">Location:</span>
                  <span className="text-gray-600 text-right">{property.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-black">Property Type:</span>
                  <span className="text-gray-600 text-right">{property.property_type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-black">Status:</span>
                  <span className="text-gray-600 text-right">For Sale</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-black">Beds:</span>
                  <span className="text-gray-600 text-right">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-black">Bathroom:</span>
                  <span className="text-gray-600 text-right">4.5</span>
                </div>
                 <div className="flex justify-between">
                  <span className="font-medium text-black">Car Space Per Unit:</span>
                  <span className="text-gray-600 text-right">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-black">Available Units:</span>
                  <span className="text-gray-600 text-right">4</span>
                </div>
              </div>
              <Button size="lg" className="w-full mt-8 bg-[#142B54] text-white hover:bg-[#142B54]/90 font-headline">
                DOWNLOAD BROCHURE
              </Button>
            </div>
          </div>

          <div className="py-12 md:py-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="bg-gray-100 text-black">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="floor-plans">Floor Plans</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-8">
                <p className="text-gray-600 leading-relaxed max-w-4xl">
                  {property.description}
                </p>
              </TabsContent>
              <TabsContent value="video" className="pt-8">
                <p className="text-gray-600">Video content coming soon.</p>
              </TabsContent>
              <TabsContent value="floor-plans" className="pt-8">
                 <p className="text-gray-600">Floor plans coming soon.</p>
              </TabsContent>
              <TabsContent value="location" className="pt-8">
                 <p className="text-gray-600">Location details coming soon.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <section className="py-16 sm:py-24 bg-gray-50 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Features</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint={feature.hint}
                        />
                        </div>
                        <h3 className="font-bold font-headline text-lg">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
