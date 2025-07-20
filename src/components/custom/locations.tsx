import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    name: "The Waterfront",
    location: "Eko Atlantic",
    image:
      "https://res.cloudinary.com/dbczzmftw/image/upload/v1753009587/uryulfytil4hpo3pejcr.jpg",
    hint: "illuminated building night",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    name: "Seaside Villas",
    location: "Maldives",
    image:
      "https://res.cloudinary.com/dbczzmftw/image/upload/v1753012221/tocfpjgjat38vzte7lur.jpg",
    hint: "overwater bungalows",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  },
  {
    name: "The Skyline",
    location: "Ikoyi, Lagos",
    image:
      "https://res.cloudinary.com/dbczzmftw/image/upload/v1753011867/gctmnstdokedcnqwnuwp.jpg",
    hint: "modern skyscraper lake",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  },
  {
    name: "Glass Box",
    location: "Victoria Island",
    image:
      "https://res.cloudinary.com/dbczzmftw/image/upload/v1753012131/ofcaeq2aw6i5cxdoicbn.jpg",
    hint: "glass building cityscape",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    name: "The Twin Towers",
    location: "Dubai Marina",
    image:
      "https://res.cloudinary.com/dbczzmftw/image/upload/v1753011925/r1leiwqx8p25xzmekkjh.jpg",
    hint: "twin skyscrapers clouds",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
   {
    name: "Azure Heights",
    location: "Lekki Coast",
    image:
      "https://res.cloudinary.com/dbczzmftw/image/upload/v1753012168/t28649vdwsyxwqklvilk.jpg",
    hint: "modern building sunset",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    name: "Sunset Point",
    location: "Abuja Hills",
    image:
      "https://res.cloudinary.com/dbczzmftw/image/upload/v1753011985/oo7sgcctyzypoor0ey3c.jpg",
    hint: "city building sunset",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  },
];

const Locations = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 auto-rows-[20rem] md:auto-rows-[24rem]">
          {locations.map((loc) => (
            <Link
              href={`/locations/${loc.location.toLowerCase()}`}
              key={loc.name}
              className={`group relative overflow-hidden ${loc.colSpan} ${loc.rowSpan}`}
            >
              <Image
                src={loc.image}
                alt={loc.name}
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={loc.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <h3 className="text-xl font-bold font-headline">
                  {loc.name}
                </h3>
                <p className="mt-1 text-sm text-white/80">{loc.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
