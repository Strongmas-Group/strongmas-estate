"use client";

import { useEffect, useRef, useState } from "react";

// Scrolls up and over the pinned (sticky) Elysian hero for a parallax reveal.
const AurumScroll = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Portrait Aurum cut for phones; the wide cut frames poorly on small screens.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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
    // Re-observe after the breakpoint swap remounts the <video> element.
  }, [isMobile]);

  return (
    <section id="aurum" className="relative z-10 w-full h-screen overflow-hidden bg-black">
      <img
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        src="/aurum.png"
        alt="Aurum"
      />
      {/* Keyed so the breakpoint swap remounts the element: changing src on a
          <video> that already started loading does not reload it. */}
      <video
        key={isMobile ? "mobile" : "desktop"}
        ref={videoRef}
        className={`absolute inset-0 h-full w-full ${
          isMobile ? "object-contain object-center" : "object-cover object-bottom"
        }`}
        src={isMobile ? "/aurum-mobile.mp4" : "https://res.cloudinary.com/dbtqditjh/video/upload/f_auto,q_100/v1783938629/Webvideo_1_ctnscg.mp4"}
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
