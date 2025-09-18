"use client";

import { useEffect, useState } from "react";
import PropertySearchFilter from "./property-search-filter";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Fallback delay in case video loads too fast
    const timer = setTimeout(() => setIsVideoLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoCanPlay = () => {
    // Video is ready to play
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Responsive Placeholder Image */}
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <picture>
          {/* Mobile breakpoints */}
          <source media="(max-width: 360px)" srcSet="/360x640.jpg" />
          <source media="(max-width: 375px)" srcSet="/375x812.jpg" />
          <source media="(max-width: 414px)" srcSet="/414x896.jpg" />
          <source media="(max-width: 430px)" srcSet="/430x932.jpg" />

          {/* Laptops */}
          <source media="(min-width: 431px) and (max-width: 1024px)" srcSet="/431x1024.jpg" />

          {/* Large desktops */}
          <source media="(min-width: 1025px) and (max-width: 1440px)" srcSet="/1025x1440.jpg" />

          {/* Ultra-wide screens */}
          <source media="(min-width: 1441px)" srcSet="/2560x1440.jpg" />

          {/* Fallback image */}
          <img
            src="/hero-desktop.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 z-10">
        <video
          className="w-full h-full object-cover"
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onCanPlay={handleVideoCanPlay}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-30"></div>

      {/* Content */}
      <div className="relative z-40 flex flex-col items-center justify-end h-full text-center text-white p-4">
        <div className="w-full pb-0">
          <PropertySearchFilter />
        </div>
      </div>
    </section>
  );
};

export default Hero;
