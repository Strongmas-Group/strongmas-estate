"use client";

import PropertySearchFilter from "./property-search-filter";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-contain md:object-cover bg-black"
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/background-poster.jpeg"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white p-4">
        <div className="w-full pb-0">
          <PropertySearchFilter />
        </div>
      </div>
    </section>
  );
};

export default Hero;
