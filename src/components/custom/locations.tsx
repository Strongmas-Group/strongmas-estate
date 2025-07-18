import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const locations = [
  {
    name: "New York",
    image: "https://placehold.co/800x1000",
    hint: "New York skyline",
  },
  {
    name: "Los Angeles",
    image: "https://placehold.co/800x1000",
    hint: "Los Angeles palms",
  },
  {
    name: "Miami",
    image: "https://placehold.co/800x1000",
    hint: "Miami beach",
  },
  {
    name: "Chicago",
    image: "https://placehold.co/800x1000",
    hint: "Chicago architecture",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">
            Our Locations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We have a strong presence in the world's most vibrant cities.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {locations.map((loc) => (
            <Link
              href={`/locations/${loc.name.toLowerCase()}`}
              key={loc.name}
              className="group relative block overflow-hidden rounded-lg"
            >
              <Image
                src={loc.image}
                alt={loc.name}
                width={800}
                height={1000}
                className="w-full h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={loc.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white font-headline">
                  {loc.name}
                </h3>
                <p className="mt-2 text-white flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore properties <ArrowRight className="ml-2 h-4 w-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
