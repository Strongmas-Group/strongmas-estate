"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const GOLD = "#EFC59D";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const peekRef = useRef<HTMLVideoElement>(null);
  // Portrait Aurum cut for phones; the wide cut frames poorly on small screens.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // The hero is sticky, so it keeps decoding even after you scroll down.
  // Pause it (and the small Elysian peek) once they're scrolled out of the way so
  // the browser isn't decoding two videos at the same time (which stutters).
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.5;
      const v = videoRef.current;
      const p = peekRef.current;
      if (v) past ? v.pause() : v.play().catch(() => {});
      if (p) past ? p.pause() : p.play().catch(() => {});
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
      {/* Keyed so the breakpoint swap remounts the element: changing src on a
          <video> that already started loading does not reload it. */}
      <video
        key={isMobile ? "mobile" : "desktop"}
        ref={videoRef}
        className={`absolute inset-0 w-full h-full ${
          isMobile ? "object-contain object-center" : "object-cover object-bottom"
        }`}
        src={isMobile ? "/aurum-mobile.mp4" : "https://res.cloudinary.com/dbtqditjh/video/upload/f_auto,q_auto:best/v1783938629/Webvideo_1_ctnscg.mp4"}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* ── Bottom "peek strip": a sliver of the Elysian Rise video showing there's
            another property below. Tapping it scrolls down to the full section. ── */}
      {/* Outer = centering only (flex), so it never fights the entrance/hover transforms. */}
      <div className="absolute inset-x-0 bottom-24 z-20 flex justify-start px-3 sm:bottom-20 sm:px-4 md:bottom-16 md:px-6">
        {/* Middle = smooth eased slide-up entrance. */}
        <div className="hero-peek w-full max-w-sm">
          {/* Inner = continuous luxury zoom/glow pulse (separate from hover scale). */}
          <div className="hero-peek-pulse">
          <button
            onClick={scrollToNext}
            aria-label="Elysian Rise — scroll down to explore"
            className="group relative w-full overflow-hidden rounded-xl border border-white/20 bg-black/30 shadow-2xl backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.015] hover:border-white/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
          >
            <div className="relative h-20 w-full sm:h-24">
              <video
                ref={peekRef}
                className="absolute inset-0 h-full w-full object-cover object-center"
                src="/elysian-720.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
              {/* Readability gradient over the video */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/80" />
              {/* Sleek gold light sweep */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                  className="hero-peek-shine absolute inset-y-0 left-0 w-1/3"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(239,197,157,0.35), transparent)",
                  }}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-between gap-2.5 px-3 sm:px-4">
                <div className="flex min-w-0 flex-col items-start gap-1.5">
                  <span
                    className="whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-black"
                    style={{ background: GOLD }}
                  >
                    Now Selling
                  </span>
                  <div className="min-w-0 text-left leading-tight">
                    <p
                      className="truncate text-xs font-semibold text-white sm:text-sm"
                      style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
                    >
                      ELYSIAN RISE &middot; Victoria Island
                    </p>
                    <p className="truncate text-[10px] text-white/75 sm:text-xs">
                      Explore our flagship tower — tap to view
                    </p>
                  </div>
                </div>
                <span className="hero-peek-float flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/60 bg-black/40 backdrop-blur-sm">
                  <ChevronDown className="h-4 w-4 text-white" />
                </span>
              </div>
            </div>
          </button>
          </div>
        </div>
      </div>

      {/* ── Bouncing "Scroll Down" caret → reveals the next video ── */}
      <div className="absolute bottom-6 md:bottom-4 left-0 right-0 z-20 flex justify-center">
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
