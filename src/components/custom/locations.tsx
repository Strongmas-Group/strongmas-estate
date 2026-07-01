// components/Locations.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";

const Locations = () => {
  return (
    <section id="locations" className="py-10 sm:py-14 bg-white text-black px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase tracking-widest">
            Our Properties
          </h2>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[210px] gap-4">
          {properties.slice(0, 8).map((property, index) => (
            <div key={property.name}>
              <Link
                href={`/properties/${property.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative overflow-hidden col-span-1 row-span-1 rounded-md"
              >
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <Image
                    src={property.images[0]}
                    alt={property.name}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 brightness-90 rounded-md"
                    data-ai-hint="modern building exterior"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm rounded-b-md">
                    <div className="flex justify-between">
                      <h3 className="text-xl font-bold font-headline text-white">
                        {property.name}
                      </h3>
                      {property.summary?.saleStatus && (
                        <div
                          className={`px-2 py-2 my-auto items-center text-center rounded-full text-xs font-medium ${
                            property.summary.saleStatus.toLowerCase().includes("sold out")
                              ? "bg-red-100 text-red-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {property.summary.saleStatus}
                        </div>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-white/80">{property.location}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
