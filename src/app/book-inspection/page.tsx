"use client";

import * as React from "react";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import Image from "next/image";
import Link from "next/link";

export default function BookInspectionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] bg-black">
          <Image
            src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753380962/nvojeyyxcnracxrw1zyb.png"
            alt="Book a Tour background"
            fill
            className="object-cover opacity-70"
            data-ai-hint="luxury real estate exterior"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/50" />
          <div className="relative z-10 h-full flex flex-col justify-center items-start text-white container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold font-headline">
              BOOK A TOUR
            </h1>
            <p className="mt-2 text-sm font-sans">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / Book a Tour
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 sm:py-24 bg-white text-black font-sans">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto shadow-lg border border-gray-200 rounded-2xl overflow-hidden h-[85vh] md:h-[90vh]">
              <iframe
                src="https://forms.zohopublic.com/strongmas1/form/BookATour/formperma/MMee_AahBlWQ_1veM5wwNc5TrcIkVWXWncFb2ULX8FE?zf_rszfm=1"
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Book a Tour"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
