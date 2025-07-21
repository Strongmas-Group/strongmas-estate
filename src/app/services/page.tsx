
"use client";

import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Building2, Cog, Hammer, Handshake, ShieldCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Building2,
    title: "Residential & Commercial Development",
    description: "Strongmas Residence and Development is your premier destination for exceptional real estate solutions in the world of luxury.",
  },
  {
    icon: Handshake,
    title: "Joint Venture Partnership",
    description: "At Strongmas Residence and Development, we have a rich history of creating exceptional real estate properties and delivering top-tier construction projects.",
  },
  {
    icon: Hammer,
    title: "Design & Build",
    description: "We specialize in the comprehensive design and construction of real estate properties, encompassing every facet of your project.",
  },
  {
    icon: Cog,
    title: "Facility Management",
    description: "We offer a comprehensive range of tools and services that are specifically designed to enhance the functionality, safety, and sustainability of your real estate assets.",
  },
  {
    icon: Briefcase,
    title: "Consulting Service",
    description: "As industry leaders, we are committed to providing you with a comprehensive spectrum of solutions that empowers you to navigate the real estate landscape with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Our Approach",
    description: "Our success is built on a foundation of collaboration and synergy. We seamlessly blend creativity and technical competence through direct cooperation among our team.",
  },
];

const testimonials = [
  {
    name: "Mrs. Fred",
    quote: "So far so good, Strongmas services are really fantastic and the area of their property is fantastic. The quality of work is also fantastic and i look forward to more beneficial relationship. Strongmas equals fantastic to me.",
  },
  {
    name: "Mr. Kunle",
    quote: "After inspecting your property, I was 101% convinced to own a property with Strongmas Residence and decided to be a part of the company by purchasing a unit of thier new project site THE OMINI.",
  },
  {
    name: "Mr. Ade",
    quote: "The team at Strongmas is professional, attentive, and incredibly skilled. They transformed our vision into a reality that exceeded all our expectations. Highly recommended!",
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative h-[40vh] md:h-[50vh] bg-black">
          <Image
            src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753019980/kttuzjqesi4zf3ipmkti.png"
            alt="Services background"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
            data-ai-hint="office building interior"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/50" />
          <div className="relative z-10 h-full flex flex-col justify-center items-start text-white container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold font-headline">
              OUR SERVICES
            </h1>
            <p className="mt-2 text-sm font-sans">
              <Link href="/" className="hover:underline">Home</Link> / Services
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                SERVICES WE OFFER
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-card p-6 md:p-8 rounded-lg text-left flex flex-col items-start">
                  <div className="mb-6">
                    <service.icon className="h-12 w-12 md:h-16 md:w-16 text-accent" strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white text-black font-sans">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                WHAT OUR CLIENTS SAY
              </h2>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-4 h-full">
                       <blockquote className="text-lg text-muted-foreground italic mb-6 text-center leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="font-bold text-center font-headline text-lg">
                          - {testimonial.name}
                        </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots className="mt-8 justify-center" />
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
