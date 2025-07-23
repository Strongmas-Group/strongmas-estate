
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
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
      name: "The Elysian Rise",
      location: "Musa Ya’dua Street, Victoria Island",
      description: "Inspired by the ideology of heroism and the iconic craftsmanship of the Rolls-Royce Boat Tail, The Elysian Rise is a bold expression of opulence, intelligence, and timeless architecture.",
      image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753056625/zjuiauvxp1yuwp8swhfx.jpg",
      hint: "luxury high-rise building"
    },
    {
      name: "Kesbel Court",
      location: "Lekki Phase 1",
      description: "Nestled in the heart of Lekki Phase 1, Kesbel Court is a refined multi-family apartment development that reimagines urban living through timeless architecture, luxurious comfort, and breathtaking views.",
      image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753055780/dxefvuod4v8mmwb0qe94.jpg",
      hint: "modern apartment exterior"
    },
    {
      name: "Avion Court 2",
      location: "Ikota G.R.A.",
      description: "A continuation of the distinguished Avion Court series, AVION COURT 2 is an exclusive triple-gated estate located in the prime neighborhood of Ikota G.R.A.",
      image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753056390/y6gmtpbfh9oioc44ke4y.jpg",
      hint: "gated residential estate"
    },
    {
      name: "OLIVE MALL",
      location: "Lagos Island",
      description: "Olive Mall is a signature commercial offering by Strongmas Residence, strategically located along Adeniji Road, directly opposite the newly developed Massey Children’s Hospital.",
      image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753289052/placeholder.png",
      hint: "modern shopping mall"
    }
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
                        fill
                        className="object-cover brightness-50"
                        data-ai-hint={property.hint}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                        <p className="text-3xl font-sans mb-4 text-white uppercase">FEATURED PROPERTIES</p>
                        <h2 className="text-4xl md:text-7xl font-bold font-headline mb-4">
                        {property.name}
                        </h2>
                        <p className="text-lg text-center max-w-md md:max-w-2xl mb-8">
                        {property.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" variant="secondary" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                            <Link href={`/properties/${property.name.toLowerCase().replace(/\s+/g, '-')}`}>VIEW PROPERTY</Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary" className="bg-[#EFC59D] hover:bg-accent/90 text-accent-foreground font-bold">
                             <Link href="/#featured">VIEW ALL</Link>
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
