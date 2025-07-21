import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";

const Locations = () => {
  // Define a static grid layout configuration.
  const gridConfig = [
    { colSpan: "col-span-1", rowSpan: "row-span-1" },
    { colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
    { colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
    { colSpan: "col-span-1", rowSpan: "row-span-1" },
    { colSpan: "col-span-1", rowSpan: "row-span-1" },
    { colSpan: "col-span-1", rowSpan: "row-span-1" },
    { colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
  ];

  return (
    <section id="locations" className="py-16 sm:py-24 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase tracking-widest">
            Our Locations
          </h2>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[210px] gap-1">
          {properties.slice(0, 7).map((property, index) => (
            <Link
              href={`/properties/${property.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={property.name}
              className={`group relative overflow-hidden ${gridConfig[index % gridConfig.length].colSpan} ${gridConfig[index % gridConfig.length].rowSpan}`}
            >
              <Image
                src={property.images[0]}
                alt={property.name}
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint="modern building exterior"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold font-headline text-white">
                  {property.name}
                </h3>
                <p className="mt-1 text-sm text-white/80">{property.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
