
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
    name: "STRONGMAS RESIDENCE",
    "location": "Lekki Phase 1",
    tag: "SOLD OUT & DELIVERED",
    image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753026386/rvhuegrcdi6lvcaynjcn.jpg",
    description: "A bespoke 4-bedroom smart terrace duplexes, sculpted for the refined homeowner. This property offers timeless architectural design, eco-friendly materials, and smart home automation.",
    hint: "Modern Private resident",
  },
  {
    name: "THE OMINI",
    location: "Lekki Phase 1",
    tag: "SOLD OUT & DELIVERED",
    image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753027544/fidzpkzef7eoigoonzc1.jpg",
    description: "A 5-story multifamily premium apartments complex that embodies elegance and contemporary design. It features smart home automations with artificial intelligence and oversized west-facing windows.",
    hint:"Fully Serviced Smart Apartments",
  },
  {
    name: "AVION COURT 1",
    location: "Abraham Adesanya",
    tag: "SOLD OUT & DELIVERED",
    image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753056289/uu92ucmkyuct93tuzcrh.jpg",
    description: "It’s a refined collection of contemporary terrace duplexes, thoughtfully built within a sustainable estate in the serene heart of Abraham Adesanya, Ajah.",
    hint: "Gated Estate Environment",
  },
  {
    name: "Kesbel Court",
    tag: "SOLD OUT, Roofing in Progress",
    location: "Lekki Phase 1",
    description: "Nestled in the heart of Lekki Phase 1, Kesbel Court is a refined multi-family apartment development that reimagines urban living through timeless architecture, luxurious comfort, and breathtaking views.",
    image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753055829/nmhclllutnwnghxem3xj.jpg",
    hint: "modern apartment exterior"
  },
  {
    name: "Avion Court 2",
    tag: "SOLD OUT, 90% Completed",
    location: "Ikota G.R.A.",
    description: "A continuation of the distinguished Avion Court series, AVION COURT 2 is an exclusive triple-gated estate located in the prime neighborhood of Ikota G.R.A.",
    image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753056390/y6gmtpbfh9oioc44ke4y.jpg",
    hint: "gated residential estate"
  },
  {
    name: "The Elysian Rise",
    tag: "Piling In Progress",
    location: "Musa Ya’dua Street, Victoria Island",
    description: "Inspired by the ideology of heroism and the iconic craftsmanship of the Rolls-Royce Boat Tail, The Elysian Rise is a bold expression of opulence, intelligence, and timeless architecture.",
    image: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753056625/zjuiauvxp1yuwp8swhfx.jpg",
    hint: "luxury high-rise building"
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
                    <p className="text-3xl font-sans mb-5 text-white uppercase">FEATURED PROPERTIES</p>
                    <h2 className="text-4xl md:text-6xl font-bold font-headline mb-4">
                      {property.name}
                    </h2>
                    <p className="text-2xl md:text-2xl text-[#EFC59D] font-bold font-headline mb-4">({property.tag})</p>
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
