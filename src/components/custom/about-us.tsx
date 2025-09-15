
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section id="about" className="py-4 sm:py-6 bg-background">
      <div className=" mx-auto px-4">
        <div
          className="bg-card p-6 md:p-12 rounded-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="text-white space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                WHAT IS STRONGMAS?
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                STRONGMAS is more than just a collection of luxury
                properties—it's a vision of sustainable, tech-enabled living
                refined. With over a decade of experience in real estate
                development, we’ve set new benchmarks for modern,
                high-performance housing in Lagos, Nigeria, and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our zero-energy consumption homes blend architectural excellence
                with cutting-edge smart technologies and eco-conscious design.
                STRONGMAS delivers livable spaces that transform lives, create
                lasting value, and build legacies for a discerning global
                clientele. With an expansion focus across Africa, we are
                committed to redefining how luxury and sustainability coexist in
                the built environment.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 cursor-pointer"
              >
                  <Link href="/about">Learn more about Strongmas Residence</Link>
              </Button>
            </div>

            <div
              className="relative h-[400px] md:h-[650px] w-full"
            >
              <Image
                src="https://res.cloudinary.com/dbczzmftw/image/upload/v1752970206/f7po08vfgnluvu3wv4l9.png"
                alt="Business handshake"
                fill
                className="object-cover rounded-lg"
                data-ai-hint="business handshake"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
