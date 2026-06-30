"use client";

import { useEffect, useRef } from "react";

// Scrolls up and over the pinned (sticky) Elysian hero for a parallax reveal.
const AurumScroll = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Only decode while the section is on screen so it isn't fighting the
  // hero video for the browser's video decoder.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        // Only start once the user has actually scrolled the video into view.
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="aurum" className="relative z-10 w-full h-screen overflow-hidden bg-black">
      <img
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        src="/aurum.png"
        alt="Aurum"
      />
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        src="/md-version-720.mp4"
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
};

export default AurumScroll;
