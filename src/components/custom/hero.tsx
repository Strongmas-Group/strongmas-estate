
"use client";

import PropertySearchFilter from "./property-search-filter";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[100vh] object-cover -translate-x-1/2 -translate-y-1/2"
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white p-4">
        <div className="w-full pb-2">
            <PropertySearchFilter />
        </div>
      </div>
    </section>
  );
};

export default Hero;
