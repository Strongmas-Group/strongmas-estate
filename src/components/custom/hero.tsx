"use client";

import PropertySearchFilter from "./property-search-filter";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video with Poster */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata" // Faster start, doesn't block page rendering
          poster="/background-poster.jpeg" // Lightweight fallback image
        />
      </div>

      {/* Light Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Above Video */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white p-4">
        <div className="w-full pb-0">
          <PropertySearchFilter />
        </div>
      </div>
    </section>
  );
};

export default Hero;
