"use client";

import { Users, Building2, Home, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, value: "30+", label: "Satisfied Clients" },
  { icon: Building2, value: "1,256+", label: "In planning and progress" },
  { icon: Home, value: "50+", label: "Homes delivered" },
  { icon: MapPin, value: "10", label: "Locations" },
];

const Stats = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center flex flex-col items-center"
            >
              <stat.icon
                className="w-8 h-8 text-primary mb-4"
                strokeWidth={1}
              />
              <p className="text-3xl md:text-5xl font-bold text-primary font-headline">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-primary/70 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
