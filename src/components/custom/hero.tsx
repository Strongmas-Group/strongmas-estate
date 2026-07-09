"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // The hero is sticky, so it keeps decoding even after you scroll down.
  // Pause it once it's scrolled out of view so the browser isn't decoding
  // two videos at the same time (which causes stutter).
  useEffect(() => {
    const onScroll = () => {
      const v = videoRef.current;
      if (!v) return;
      if (window.scrollY > window.innerHeight * 0.5) v.pause();
      else v.play().catch(() => {});
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToNext = () => {
    document
      .getElementById("aurum")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="sticky top-0 w-full h-screen overflow-hidden bg-black z-0">
      {/* ── Full-bleed Aurum video (plays first) ── */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        src="/aurum.png"
        alt="Aurum"
      />
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        src="https://res.cloudinary.com/dbtqditjh/video/upload/q_auto:best,e_improve,e_brightness:25,e_contrast:15,e_vibrance:20/v1783595850/Md_Version-_4_kco9m1.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* ── Bouncing "Scroll Down" caret → reveals the next video ── */}
      <div className="absolute bottom-24 md:bottom-12 left-0 right-0 z-20 flex justify-center">
        <button
          onClick={scrollToNext}
          className="group flex animate-bounce flex-col items-center gap-1 select-none"
          aria-label="Scroll down"
        >
          <span
            className="text-[9px] tracking-[0.25em] uppercase text-white/90"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.85)" }}
          >
            Scroll Down
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/60 bg-black/30 backdrop-blur-sm">
            <ChevronDown className="h-4 w-4 text-white" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
