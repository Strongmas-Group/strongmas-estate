"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const properties = [
  {
    name: "The Omini",
    location: "Akin Leigh Crescent, Off Admiralty Way, Lekki Phase 1",
    image:
      "https://res.cloudinary.com/dbczzmftw/image/upload/v1753008086/qtvlqhhyfv6fin01pkpa.jpg",
    hint: "modern living room",
  },
  {
    name: "The Monarch",
    location: "Banana Island, Ikoyi, Lagos",
    image: "https://placehold.co/1920x1080",
    hint: "luxury apartment balcony",
  },
  {
    name: "The Imperial",
    location: "Eko Atlantic City, Lagos",
    image: "https://placehold.co/1920x1080",
    hint: "penthouse city view",
  },
];

const FeaturedProperties = () => {
  return (
    <section id="featured" className="relative w-full py-0">
       <div className="w-screen -translate-x-1/2 left-1/2 relative">
        <Carousel
            plugins={[
                Autoplay({
                    delay: 5000,
                    stopOnInteraction: true,
                }),
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
            >
            <CarouselContent>
                {properties.map((property, index) => (
                <CarouselItem key={index}>
                    <div className="relative w-full h-[80vh]">
                    <Image
                        src={property.image}
                        alt={property.name}
                        layout="fill"
                        objectFit="cover"
                        className="brightness-50"
                        data-ai-hint={property.hint}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                        <p className="text-sm tracking-[0.2em] mb-4 text-accent">FEATURED PROPERTIES</p>
                        <h2 className="text-5xl md:text-7xl font-bold font-headline mb-4">
                        {property.name}
                        </h2>
                        <p className="text-lg max-w-2xl mb-8">
                        {property.location}
                        </p>
                        <div className="flex gap-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            VIEW PROPERTY
                        </Button>
                        <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            VIEW ALL
                        </Button>
                        </div>
                    </div>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40 border-none" />
            <CarouselNext className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40 border-none" />
            </Carousel>
       </div>
    </section>
  );
};

export default FeaturedProperties;
