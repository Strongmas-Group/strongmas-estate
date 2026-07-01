"use client";

import { useState, useEffect } from "react";
import { Play, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import PropertySearchFilter from "./property-search-filter";

type ActiveVideo = null | "left" | "right";
type HoveredPanel = null | "left" | "right";

const GOLD = "#B8923E";

// Dark halo that keeps the white intro write-ups readable on any image
// background — crisp edge contrast plus a soft spread for separation.
const TEXT_SHADOW =
  "0 1px 2px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.8), 0 0 34px rgba(0,0,0,0.55)";

// Window (in seconds of the Aurum loop) where the on-video location callouts
// appear — the corner title fades out across this stretch so they don't clash.
const AURUM_CALLOUT_START = 26;
const AURUM_CALLOUT_END = 37;

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState<ActiveVideo>(null);
  const [hovered, setHovered] = useState<HoveredPanel>(null);
  const [showVideos, setShowVideos] = useState(false);
  const [aurumCallout, setAurumCallout] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowVideos(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const leftClip = () => {
    if (hovered === "left")  return "polygon(0 0, 95% 0, 85% 100%, 0 100%)";
    if (hovered === "right") return "polygon(0 0, 83% 0, 73% 100%, 0 100%)";
    return                          "polygon(0 0, 89% 0, 79% 100%, 0 100%)";
  };
  const rightClip = () => {
    if (hovered === "right") return "polygon(24% 0, 100% 0, 100% 100%, 14% 100%)";
    if (hovered === "left")  return "polygon(36% 0, 100% 0, 100% 100%, 26% 100%)";
    return                          "polygon(30% 0, 100% 0, 100% 100%, 20% 100%)";
  };

  const lineTopX = hovered === "left" ? "95" : hovered === "right" ? "83" : "89";
  const lineBotX = hovered === "left" ? "85" : hovered === "right" ? "73" : "79";

  // Diagonal seam between the panels, and a frosted-glass strip centred on it.
  const seamTop = 0.63 * parseFloat(lineTopX);
  const seamBot = 0.63 * parseFloat(lineBotX);
  const glassHalf = 0.22; // half-width of the glass strip (% of viewport width)
  const glassBand =
    `polygon(${seamTop - glassHalf}% 0, ${seamTop + glassHalf}% 0, ` +
    `${seamBot + glassHalf}% 100%, ${seamBot - glassHalf}% 100%)`;

  const panelTransition = "clip-path 700ms cubic-bezier(0.4,0,0.2,1)";
  const seamTransition = "all 700ms cubic-bezier(0.4,0,0.2,1)";

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* ── Left panel (image during intro → video after) ── */}
      <div
        className="absolute top-0 bottom-0 left-0 z-[11] cursor-pointer"
        style={{ width: "63%", clipPath: leftClip(), transition: panelTransition }}
        onClick={() => setActiveVideo("left")}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: showVideos ? 0 : 1 }}
          src="/elysian.jpeg"
          alt="Elysian Rise"
        />
        {showVideos && (
          <video
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            src="/Elysian%20Website.mp4"
            autoPlay loop muted playsInline preload="metadata"
          />
        )}
        <div className="absolute inset-0 bg-black/25 transition-opacity duration-700" style={{ opacity: showVideos ? 1 : 0 }} />
        <div
          className="absolute top-1/2 left-[42%] -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: hovered === "left" && showVideos ? 1 : 0,
            transform: `translate(-50%,-50%) scale(${hovered === "left" ? 1 : 0.6})`,
            transition: "opacity 400ms, transform 400ms",
          }}
        >
          <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <Play className="w-5 h-5 text-white fill-white ml-1" />
          </div>
        </div>
      </div>

      {/* ── Right panel ── */}
      <div
        className="absolute top-0 bottom-0 right-0 z-[10] cursor-pointer"
        style={{ width: "63%", clipPath: rightClip(), transition: panelTransition }}
        onClick={() => setActiveVideo("right")}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: showVideos ? 0 : 1 }}
          src="/aurum.png"
          alt="Aurum"
        />
        {showVideos && (
          <video
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            src="/ARUM%20WEBSITE%20VIDEO.mp4"
            autoPlay loop muted playsInline preload="metadata"
            onTimeUpdate={(e) => {
              const t = e.currentTarget.currentTime;
              const inWindow = t >= AURUM_CALLOUT_START && t <= AURUM_CALLOUT_END;
              setAurumCallout((prev) => (prev === inWindow ? prev : inWindow));
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/25 transition-opacity duration-700" style={{ opacity: showVideos ? 1 : 0 }} />
        <div
          className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: hovered === "right" && showVideos ? 1 : 0,
            transform: `translate(-50%,-50%) scale(${hovered === "right" ? 1 : 0.6})`,
            transition: "opacity 400ms, transform 400ms",
          }}
        >
          <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <Play className="w-5 h-5 text-white fill-white ml-1" />
          </div>
        </div>
      </div>

      {/* ── Corner titles (fade in with the videos) ── */}
      <div
        className="absolute z-[18] pointer-events-none select-none transition-all duration-1000"
        style={{
          left: "4%",
          top: "6rem",
          opacity: showVideos ? 1 : 0,
          transform: showVideos ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        <h2
          className="font-normal leading-[0.95] text-3xl md:text-5xl"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: "#fff", textShadow: "0 2px 26px rgba(0,0,0,0.6)" }}
        >
          Elysian <span style={{ color: GOLD }}>Rise</span>
        </h2>
        <div className="mt-3 h-px w-16" style={{ background: `linear-gradient(to right, ${GOLD}, transparent)` }} />
      </div>

      <div
        className="absolute z-[18] pointer-events-none select-none text-right transition-all duration-1000"
        style={{
          right: "4%",
          top: "6rem",
          opacity: showVideos && !aurumCallout ? 1 : 0,
          transform: showVideos ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        <h2
          className="font-normal leading-[0.95] text-3xl md:text-5xl tracking-[0.12em]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: "#fff", textShadow: "0 2px 26px rgba(0,0,0,0.6)" }}
        >
          Aurum
        </h2>
        <div className="mt-3 ml-auto h-px w-16" style={{ background: `linear-gradient(to left, ${GOLD}, transparent)` }} />
      </div>

      {/* ── Write-ups overlay (fades out with videos) ── */}
      <div
        className="absolute inset-0 z-[16] pointer-events-none transition-opacity duration-700"
        style={{ opacity: showVideos ? 0 : 1 }}
      >
        {/* Left write-up */}
        <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[340px] text-center">
          <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase mb-3" style={{ color: GOLD, textShadow: TEXT_SHADOW }}>Featured Project</p>
          <h2 className="text-4xl md:text-6xl font-normal leading-[1.05] mb-5" style={{ color: "#fff", fontFamily: 'Georgia, "Times New Roman", serif', textShadow: TEXT_SHADOW }}>ELYSIAN<br />RISE</h2>
          <div className="w-10 h-px mb-5 mx-auto" style={{ backgroundColor: GOLD }} />
          <p className="text-sm md:text-base font-medium tracking-wide uppercase leading-relaxed" style={{ color: "#fff", textShadow: TEXT_SHADOW }}>
            Modern Living.<br />Limitless Possibilities.
          </p>
        </div>

        {/* Right write-up */}
        <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[340px] text-center">
          <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase mb-3" style={{ color: GOLD, textShadow: TEXT_SHADOW }}>New Project</p>
          <h2 className="text-4xl md:text-6xl font-normal leading-[1.05] mb-5" style={{ color: "#fff", fontFamily: 'Georgia, "Times New Roman", serif', textShadow: TEXT_SHADOW }}>AURUM</h2>
          <div className="w-10 h-px mb-5 mx-auto" style={{ backgroundColor: GOLD }} />
          <p className="text-sm md:text-base font-medium tracking-wide uppercase leading-relaxed" style={{ color: "#fff", textShadow: TEXT_SHADOW }}>
            Exclusivity.<br />Elegance.<br />Extraordinary Living.
          </p>
        </div>

        {/* Locations pinned to bottom corners */}
        <div className="absolute bottom-[7%] left-[5%] flex items-center gap-2" style={{ color: "#fff", textShadow: TEXT_SHADOW }}>
          <MapPin className="w-4 h-4" style={{ color: GOLD }} />
          <span className="text-xs tracking-[0.15em] uppercase">Ikoyi, Lagos</span>
        </div>
        <div className="absolute bottom-[7%] right-[4%] flex items-center gap-2" style={{ color: "#fff", textShadow: TEXT_SHADOW }}>
          <MapPin className="w-4 h-4" style={{ color: GOLD }} />
          <span className="text-xs tracking-[0.15em] uppercase">Victoria Island, Lagos</span>
        </div>
      </div>

      {/* ── Frosted-glass diagonal divide ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 17,
          clipPath: glassBand,
          WebkitClipPath: glassBand,
          backdropFilter: "blur(10px) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) saturate(120%)",
          background:
            "linear-gradient(100deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.16) 50%, rgba(255,255,255,0.05) 100%)",
          boxShadow: "inset 0 0 12px rgba(255,255,255,0.12)",
          transition: panelTransition,
        }}
      />
      {/* glass edge highlights */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 17 }}
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line
          x1={seamTop - glassHalf} y1="0" x2={seamBot - glassHalf} y2="100"
          stroke="rgba(255,255,255,0.45)" strokeWidth="0.1"
          vectorEffect="non-scaling-stroke" style={{ transition: seamTransition }}
        />
        <line
          x1={seamTop + glassHalf} y1="0" x2={seamBot + glassHalf} y2="100"
          stroke="rgba(255,255,255,0.45)" strokeWidth="0.1"
          vectorEffect="non-scaling-stroke" style={{ transition: seamTransition }}
        />
      </svg>

      {/* ── < > arrows button on the diagonal ── */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          left: `calc(${0.63 * (parseFloat(lineTopX) + parseFloat(lineBotX)) / 2}% )`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          transition: "left 700ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="w-6 h-6 rounded-full border border-[#EFC59D]/70 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <ChevronLeft className="w-2.5 h-2.5 text-[#EFC59D]" />
          <ChevronRight className="w-2.5 h-2.5 text-[#EFC59D]" />
        </div>
      </div>

      {/* ── Search bar — fades in once the videos start ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transition-opacity duration-700"
        style={{ opacity: showVideos ? 1 : 0 }}
      >
        <div className="pointer-events-auto">
          <PropertySearchFilter />
        </div>
      </div>

      {/* ── Full-screen on click ── */}
      {activeVideo !== null && (
        <div className="fixed inset-0 z-50 bg-black">
          <video
            className="w-full h-full object-cover"
            src={activeVideo === "left" ? "/Elysian%20Website.mp4" : "/ARUM%20WEBSITE%20VIDEO.mp4"}
            autoPlay loop muted playsInline
          />
          <button
            className="absolute top-6 right-6 bg-black/50 hover:bg-black/75 text-white rounded-full p-3 backdrop-blur-sm border border-white/20 transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
