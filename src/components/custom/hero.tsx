"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import PropertySearchFilter from "./property-search-filter";

const heroImages = [
  {
    src: "https://placehold.co/1920x1080",
    alt: "Modern villa with a pool",
    hint: "modern villa",
    title: "Find Your Dream Home",
    description:
      "Discover the finest properties in the most desirable locations.",
  },
  {
    src: "https://placehold.co/1920x1080",
    alt: "Luxury apartment with city view",
    hint: "luxury apartment",
    title: "Experience Urban Living",
    description: "Sophisticated apartments in the heart of the city.",
  },
  {
    src: "https://placehold.co/1920x1080",
    alt: "Cozy suburban house",
    hint: "suburban house",
    title: "A Place to Call Your Own",
    description: "Comfortable and stylish homes for every family.",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh]">
      <Carousel
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        className="w-full h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover brightness-50"
                  data-ai-hint={image.hint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
                    {image.title}
                  </h1>
                  <p className="text-lg md:text-xl max-w-2xl">
                    {image.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex" />
      </Carousel>
      <div className="absolute -bottom-16 md:-bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-10">
        <PropertySearchFilter />
      </div>
    </section>
  );
};

export default Hero;
