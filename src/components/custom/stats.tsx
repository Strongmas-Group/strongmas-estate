
"use client";

import Image from "next/image";

interface Stat {
  iconUrl: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { 
    iconUrl: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753103996/qilugt8bymxotpslbblk.svg", 
    value: "30+", 
    label: "Satisfied Clients" 
  },
  { 
    iconUrl: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753103897/npdy2kxd72udjpy2iymq.svg", 
    value: "1,256+", 
    label: "In planning and progress" 
  },
  { 
    iconUrl: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753104027/ip1mbz2ubonfanldrm1v.svg", 
    value: "50+", 
    label: "Homes delivered" 
  },
  { 
    iconUrl: "https://res.cloudinary.com/dbczzmftw/image/upload/v1753104048/rj5xfstdhejdjjhz9ouy.svg", 
    value: "10", 
    label: "Locations" 
  },
];

const Stats = () => {
  return (
    <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center flex flex-col items-center"
            >
              <Image
                src={stat.iconUrl}
                alt={`${stat.label} icon`}
                width={32}
                height={32}
                className="w-8 h-8 text-primary mb-4"
              />
              <p className="text-3xl md:text-5xl font-bold text-primary font-headline">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-primary/70 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Stats;
