
"use client";

import PropertySearchFilter from "./property-search-filter";

const Hero = () => {
  const videoId = "wLbH-dzf-JE";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[100vh] -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-sm md:max-w-7xl px-4 z-30">
        <PropertySearchFilter />
      </div>
    </section>
  );
};

export default Hero;
