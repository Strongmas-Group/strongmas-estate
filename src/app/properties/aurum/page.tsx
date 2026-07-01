"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowDownRight,
  CheckCircle2,
  Download,
  Phone,
  MessageCircle,
  Video,
  HandCoins,
  Maximize2,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { cld, cldSrcSet } from "@/lib/cld";
import BuyerRegistrationModal, { openRegister } from "@/components/custom/buyer-registration-modal";

const GOLD = "#B8923E";

// TODO: replace placeholders with the real Aurum renders/photos when supplied.
const PH = "/aurum.png";

// TODO: replace with the real sales line / WhatsApp / brand-ambassador email.
const PHONE = "tel:+2349010777777";
const WHATSAPP = "https://wa.me/2349010777777";
const BROCHURE_URL = "/Arurum%20Broc-compressed.pdf";

/* ─── Exact AURUM content (verbatim — do not alter wording) ─── */
const OVERVIEW = [
  "Aurum is derived from the Latin word for gold, symbolising prestige, prosperity and enduring value. Aurum is an exclusive luxury residential development in Lekki Phase I, offering elegantly designed 2-bedroom residences and 3-bedroom penthouses that redefine contemporary urban living.",
];

const TYPOLOGY = ["16 Units of 2-Bedroom Apartments", "2 Exclusive 3-Bedroom Penthouses"];
const TOTAL_UNITS = "Total units: 18, all with a balcony";

const PRICING = [
  {
    title: "2-Bedroom Apartments",
    lines: [
      "Outright: ₦320,000,000",
      "Installment: ₦350,000,000",
      "Initial Deposit: 40% = #128,000,000",
      "Spread Balance Across: 12/18 months",
    ],
  },
  { title: "3-Bedroom Penthouses", lines: ["Pricing: To Be Announced", "Initial Deposit: 40%"] },
];

const FLOOR_DIST = [
  { floor: "Ground Floor", items: ["Dedicated Parking Area", "Secure Access & Circulation"] },
  { floor: "First, Second & Third Floor", items: ["5 Units of 2-Bedroom Apartments"] },
  {
    floor: "Pent Floor",
    items: [
      "2 Units of 3-Bedroom Duplex Penthouses",
      "1 Unit of 2-Bedroom Apartment, above the residence lies a curated rooftop experience (Gym & Swimming pool)",
    ],
  },
];

const AMENITIES = [
  "Smart Home Automation",
  "Elevator Access",
  "Children Play Area",
  "Dedicated Concierge",
  "Private Foyer Entrance for the penthouses",
  "Fully Fitted Kitchen",
  "Gleaming Pool",
  "24/7 Security",
  "Dedicated Parking",
  "CCTV Surveillance",
  "Backup Power Supply",
  "Treated Water System",
  "Expansive Views & Elevated City Views",
  "Modern Architectural Detailing",
  "En-suite bedrooms",
  "Elegant master suite",
];

const PROXIMITY = [
  { place: "Eko Atlantic City", time: "8–10 minutes" },
  { place: "Canadian Embassy", time: "8–10 minutes" },
  { place: "Upbeat Recreation Center", time: "8–10 minutes" },
  { place: "Prince Ebaeno Supermarket", time: "5–10 minutes" },
  { place: "Nok by Alara", time: "8–10 minutes" },
  { place: "Murtala Muhammed International Airport", time: "35–45 minutes" },
];

const units = [
  { name: "2 Bedroom", price: "Starting ₦320,000,000", meta: "16 Units · Private Balcony", img: "https://res.cloudinary.com/dbtqditjh/image/upload/v1782393700/ChatGPT_Image_Jun_5_2026_03_44_53_PM_eiidb5.png", href: "/properties/aurum/2-bedroom" },
  { name: "3 Bedroom Penthouse", price: "Price To Be Announced", meta: "2 Exclusive Units", img: "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736253/3_Bed_6_c8k5ab.png", href: "/properties/aurum/3-bedroom-penthouse" },
];

const FLOOR_IMAGES = [
  "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736218/WhatsApp_Image_2026-06-29_at_1.10.49_PM_e1svof.jpg",
  "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736213/WhatsApp_Image_2026-06-29_at_1.10.48_PM_s1ys2a.jpg",
  "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736213/WhatsApp_Image_2026-06-29_at_1.10.50_PM_ljcxlr.jpg",
  "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736213/WhatsApp_Image_2026-06-29_at_1.10.49_PM_2_rvyoa0.jpg",
  "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736212/WhatsApp_Image_2026-06-29_at_1.10.49_PM_1_agiuwr.jpg",
];

const galleryTabs = [
  {
    label: "Bedroom",
    imgs: [
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736264/3_Bed_1_ojtbjq.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736235/2_Bed_5_plebjg.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736253/3_Bed_6_c8k5ab.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736237/2_Bed_4_g1jb8v.png",
    ],
  },
  {
    label: "Living Room",
    imgs: [
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736262/3_Bed_2_i069gs.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736245/2_Bed_3_ud9lln.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736249/2_Bed_2_hg9n8z.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736233/2_Bed_1_xwly3c.png",
    ],
  },
  {
    label: "Exterior",
    imgs: [
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736232/ChatGPT_Image_Jun_29_2026_11_18_27_AM_f7jwh8.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736236/ChatGPT_Image_Jun_29_2026_11_36_53_AM_lwowfu.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736240/ChatGPT_Image_Jun_29_2026_11_31_50_AM_dr2rok.png",
    ],
  },
];

const faqs = [
  {
    q: "Why Aurum?",
    a: "Inspired by the timeless brilliance of gold, Aurum is a boutique collection of luxury residences that blends elegant architecture, AI-powered smart living, and enduring investment value in one of Lagos' most prestigious neighbourhoods.",
  },
  {
    q: "Where is Aurum located?",
    a: "Aurum enjoys a prestigious address at 4 Balogun Street, Off Jide Sawyer Drive, Lekki Phase I—placing residents minutes from Lagos' finest business, leisure and lifestyle destinations.\n\nNearby Landmarks\n• Civic Centre – 6 mins\n• Lagos-Calabar Coastal Highway – 8 mins\n• Canadian High Commission – 8 mins\n• EbonyLife Cinema – 10 mins\n• Fine dining, luxury retail, international schools and premium healthcare.",
  },
  {
    q: "What makes Aurum exclusive?",
    a: "Aurum is a boutique luxury development comprising only 18 residences:\n• 16 Two-Bedroom Apartments\n• 2 Three-Bedroom Penthouses\n\nA limited collection designed for discerning homeowners seeking privacy, prestige and long-term value.",
  },
  {
    q: "What types of residences are available?",
    a: "Every residence is thoughtfully crafted with contemporary architecture, premium finishes, spacious interiors, and AI-powered Smart Home technology, delivering a refined living experience in the heart of Lekki Phase I.",
  },
  {
    q: "What is the building configuration?",
    a: "• Five Floors\n• Ground Floor Secure Parking\n• Four Residential Floors\n• High-Speed Elevators",
  },
  {
    q: "What lifestyle amenities are available?",
    a: "Residents enjoy access to:\n• Rooftop Swimming Pool\n• Fully Equipped Gym\n• Children's Play Area\n• Concierge Services\n• AI-Powered Smart Home Technology\n• High-Speed Elevators\n• 24-Hour CCTV & Access Control\n• Standby Power\n• Treated Water\n• Dedicated Resident Parking",
  },
  {
    q: "Why invest in Aurum?",
    a: "Aurum combines luxury living with exceptional investment potential.\n\nInvestment Highlights:\n• Prime Lekki Phase I Address\n• Only 18 Exclusive Residences\n• AI-Powered Smart Homes\n• Projected Rental Yield of 7–10%\n• Strong Capital Appreciation Potential\n• High Demand from Professionals, Expatriates and Diaspora Investors\n• Developed by an experienced luxury developer",
  },
  {
    q: "When will Aurum be completed?",
    a: "Q4 2028, with handover immediately upon completion.",
  },
  {
    q: "What payment options are available?",
    a: "Choose a plan that suits your investment goals:\n• 100% Outright Payment\n• 20% Initial Deposit\n• 40% Initial Deposit\n• Flexible Construction Payment Plan\n• Bespoke Payment Options",
  },
  {
    q: "Who is developing Aurum?",
    a: "Strongmas Residence is a leading luxury real estate developer delivering premium residences defined by innovative architecture, intelligent living and exceptional craftsmanship.\n\nIts growing portfolio includes Strongmas Residence, Avions Court I & II, The Omini and Kesbel Court, while its flagship project, Elysian Rise in Victoria Island, is currently under construction.",
  },
  {
    q: "About Strongmas Residence",
    a: "Strongmas Residence creates exceptional homes where luxury, innovation and intelligent living converge. Every development is thoughtfully designed to deliver timeless architecture, premium finishes and enduring investment value.\n\nWith a proven portfolio in Lagos' most desirable locations, Strongmas Residence continues to set new standards in luxury residential development.",
  },
];

/* ── Two-tone uppercase heading (Binghatti style) with a gold accent rule ── */
const SectionHeading = ({
  first,
  rest,
  center = true,
}: {
  first: string;
  rest: string;
  center?: boolean;
}) => (
  <div className={center ? "text-center" : ""}>
    <div
      className={`mb-6 h-px w-16 ${center ? "mx-auto" : ""}`}
      style={{ background: `linear-gradient(to right, ${GOLD}, transparent)` }}
    />
    <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.12em]">
      <span className="font-bold">{first}</span>{" "}
      <span className="text-white/55">{rest}</span>
    </h2>
  </div>
);

/* ── Scroll reveal with directional variants + stagger ── */
type RevealVariant = "up" | "left" | "right" | "scale";
const START: Record<RevealVariant, string> = {
  up: "translateY(60px)",
  left: "translateX(-70px)",
  right: "translateX(70px)",
  scale: "scale(0.9)",
};
const Reveal = ({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.filter = "blur(0)";
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: START[variant],
        filter: "blur(6px)",
        transition: `opacity 1100ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1100ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, filter 1100ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const RegisterButton = ({ filled = false }: { filled?: boolean }) =>
  filled ? (
    <button
      type="button"
      onClick={openRegister}
      className="inline-block px-12 py-4 text-xs tracking-[0.3em] uppercase text-white"
      style={{ background: "linear-gradient(180deg,#2a2a2a,#000)", border: "1px solid #333" }}
    >
      Register Your Interest
    </button>
  ) : (
    <button
      type="button"
      onClick={openRegister}
      className="inline-block border border-white/40 bg-white/5 px-12 py-4 text-xs tracking-[0.3em] uppercase text-white backdrop-blur-sm transition-colors hover:border-white"
    >
      Register Your Interest
    </button>
  );

export default function AurumPage() {
  const [planTab, setPlanTab] = useState(0);
  const [galTab, setGalTab] = useState(0);
  const [galShot, setGalShot] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Warm the cache for every gallery image so switching tabs (Bedroom →
  // Living Room → Exterior) is instant instead of fetching on click.
  useEffect(() => {
    galleryTabs.forEach((tab) =>
      tab.imgs.forEach((src) => {
        const img = new Image();
        img.src = cld(src, 1024);
      })
    );
    FLOOR_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = cld(src, 1440);
    });
  }, []);

  return (
    <div className="relative overflow-x-clip text-white">
      {/* Soft, luxurious animated background — drifting aurora, corner glows & floating sparkles */}
      <div className="aurum-bg fixed inset-0 -z-10 overflow-hidden bg-[#1a1309]">
        <div className="aurum-bg-orb aurum-bg-orb--1" />
        <div className="aurum-bg-orb aurum-bg-orb--2" />
        <div className="aurum-bg-orb aurum-bg-orb--3" />
        {/* Corner & side glows that breathe in and out */}
        <div className="aurum-glow aurum-glow--tr" />
        <div className="aurum-glow aurum-glow--left" />
        <div className="aurum-glow aurum-glow--right" />
        {/* Sweeping light ray across the top */}
        <div className="aurum-sweep" />
        {/* Floating, twinkling sparkles */}
        <div className="aurum-sparkles">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className={`aurum-spark aurum-spark--${i % 6}`} />
          ))}
        </div>
        <div className="aurum-bg-grain" />
      </div>
      <Header />

      {/* Floating contact rail (Binghatti style) */}
      <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 pr-1 md:flex">
        {[
          { icon: Phone, href: PHONE },
          { icon: MessageCircle, href: WHATSAPP },
          { icon: Video, onClick: () => openRegister() },
        ].map(({ icon: Icon, href, onClick }, i) =>
          onClick ? (
            <button
              key={i}
              type="button"
              onClick={onClick}
              className="flex h-11 w-12 items-center justify-center rounded-l-full border border-white/20 bg-black/70 backdrop-blur-sm transition-colors hover:bg-black"
            >
              <Icon className="h-4 w-4" />
            </button>
          ) : (
            <a
              key={i}
              href={href}
              className="flex h-11 w-12 items-center justify-center rounded-l-full border border-white/20 bg-black/70 backdrop-blur-sm transition-colors hover:bg-black"
            >
              <Icon className="h-4 w-4" />
            </a>
          )
        )}
      </div>

      {/* ─────────── 1 · Hero (static render) ─────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          className="aurum-kenburns absolute inset-0 h-full w-full object-cover"
          src="/WhatsApp%20Image%202026-06-25%20at%203.45.33%20PM.jpeg"
          alt="Aurum"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/75" />

        {/* Bottom stack — register button above the info bar (no overlap) */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div
            className="flex justify-center px-6 pb-6"
            style={{ opacity: 0, animation: "aurum-fade 900ms ease forwards 1000ms" }}
          >
            <RegisterButton />
          </div>
          <div
            className="flex flex-col gap-1.5 px-6 pb-7 text-[10px] tracking-[0.2em] uppercase sm:text-xs sm:tracking-[0.22em] md:flex-row md:items-center md:justify-between md:gap-2 md:px-12"
            style={{ opacity: 0, animation: "aurum-fade 1000ms ease forwards 1300ms" }}
          >
            <span className="font-semibold">Available</span>
            <span>Lekki Phase 1</span>
            <span>2 BR Apartment | 3 BR Penthouse</span>
            <span className="text-white/70">
              From <span className="font-semibold text-white">₦320,000,000</span>
            </span>
          </div>
        </div>

      </section>

      {/* ─────────── Project Overview ─────────── */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-10 text-[11px] tracking-[0.3em] uppercase text-white/40">
            <Link href="/" className="hover:text-white">Home</Link> &nbsp;&gt;&nbsp;
            <Link href="/#featured" className="hover:text-white"> All Projects</Link> &nbsp;&gt;&nbsp;
            <span className="text-white/70"> Aurum</span>
          </p>
          <Reveal>
            <SectionHeading first="PROJECT" rest="Overview" />
            <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-white/70">
              {OVERVIEW.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* Typology */}
          <Reveal className="mt-16">
            <h3 className="text-sm tracking-[0.3em] uppercase" style={{ color: GOLD }}>
              Typology
            </h3>
            <ul className="mx-auto mt-6 max-w-xl space-y-3 text-white/80">
              {TYPOLOGY.map((t) => (
                <li key={t} className="flex items-center justify-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD }} />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-white/60">{TOTAL_UNITS}</p>
            <div className="mt-12">
              <RegisterButton filled />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── 4 · Gallery ─────────── */}
      <section id="gallery" className="border-t border-white/10 py-10 md:py-14 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading first="THE" rest="Gallery" />
          </Reveal>
          <Reveal className="mt-12">
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {galleryTabs.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => {
                    setGalTab(i);
                    setGalShot(0);
                  }}
                  className={`px-6 py-3 text-xs tracking-[0.2em] uppercase transition-colors ${
                    galTab === i ? "bg-white text-black" : "border border-white/20 text-white/70 hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            {(() => {
              const imgs = galleryTabs[galTab].imgs;
              return (
                <div className="relative mx-auto aspect-[16/10] max-w-3xl overflow-hidden md:aspect-[16/9]">
                  {/* Sliding track */}
                  <div
                    className="flex h-full"
                    style={{
                      transform: `translateX(-${galShot * 100}%)`,
                      transition: "transform 350ms cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    {imgs.map((src, i) => (
                      <img
                        key={i}
                        src={cld(src, 1024)}
                        srcSet={cldSrcSet(src)}
                        sizes="(min-width: 768px) 768px, 100vw"
                        alt={`${galleryTabs[galTab].label} ${i + 1}`}
                        loading="eager"
                        decoding="async"
                        className="h-full w-full flex-shrink-0 object-cover"
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setGalShot((s) => (s - 1 + imgs.length) % imgs.length)}
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white/90 hover:bg-black/70"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={() => setGalShot((s) => (s + 1) % imgs.length)}
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white/90 hover:bg-black/70"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {imgs.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setGalShot(i)}
                        className="h-1.5 rounded-full transition-all"
                        style={{
                          width: i === galShot ? 24 : 6,
                          background: i === galShot ? GOLD : "rgba(255,255,255,0.5)",
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </Reveal>
        </div>
      </section>

      {/* ─────────── 5 · Floor Plans ─────────── */}
      <section id="floorplans" className="border-t border-white/10 py-10 md:py-14 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading first="FLOOR" rest="Plans" />
          </Reveal>
          <Reveal className="mt-12">
            <div className="relative flex h-[80vh] items-center justify-center bg-white p-4">
              <img
                src={cld(FLOOR_IMAGES[planTab], 1440)}
                srcSet={cldSrcSet(FLOOR_IMAGES[planTab])}
                sizes="(min-width: 768px) 80vw, 100vw"
                alt={`Aurum floor plan ${planTab + 1}`}
                loading="lazy"
                decoding="async"
                className="max-h-full w-auto object-contain"
              />
              <button
                onClick={() => setPlanTab((s) => (s - 1 + FLOOR_IMAGES.length) % FLOOR_IMAGES.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white/90 hover:bg-black/70"
                aria-label="Previous"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={() => setPlanTab((s) => (s + 1) % FLOOR_IMAGES.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white/90 hover:bg-black/70"
                aria-label="Next"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {FLOOR_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPlanTab(i)}
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: i === planTab ? GOLD : "rgba(0,0,0,0.25)" }}
                    aria-label={`Go to floor plan ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href={BROCHURE_URL}
                className="inline-flex items-center gap-3 px-10 py-4 text-xs tracking-[0.25em] uppercase text-black"
                style={{ background: GOLD }}
              >
                <Download className="h-4 w-4" /> Download Brochure
              </a>
            </div>
          </Reveal>

          {/* Floor Plan Distribution */}
          <Reveal className="mt-24">
            <h3 className="mb-12 text-center text-xl tracking-[0.3em] uppercase text-white/70">
              AURUM - Floor Plan Distribution
            </h3>
            <div className="space-y-px">
              {FLOOR_DIST.map((f, i) => (
                <div key={f.floor} className="grid grid-cols-1 gap-2 border-t border-white/15 py-8 md:grid-cols-[280px_1fr] md:gap-10">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm" style={{ color: GOLD }}>0{i + 1}</span>
                    <h4 className="text-2xl font-light">{f.floor}</h4>
                  </div>
                  <ul className="space-y-2 text-white/70 md:pt-1">
                    {f.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: GOLD }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── Available Units ─────────── */}
      <section className="border-t border-white/10 py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading first="AVAILABLE" rest="Units" />
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {units.map((u, i) => (
              <Reveal key={u.name} variant={i === 0 ? "left" : "right"} delay={i * 120}>
                <Link href={u.href} className="group relative block h-[60vh] overflow-hidden">
                  <img src={cld(u.img, 768)} srcSet={cldSrcSet(u.img)} sizes="(min-width: 768px) 50vw, 100vw" alt={u.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-light uppercase tracking-[0.15em]">{u.name}</h3>
                    <div className="mt-3 flex items-center gap-2 text-sm text-white/85">
                      <HandCoins className="h-4 w-4" style={{ color: GOLD }} />
                      {u.price}
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
                      <Maximize2 className="h-4 w-4" style={{ color: GOLD }} />
                      {u.meta}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View Property <ArrowDownRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Pricing ─────────── */}
      <section className="border-t border-white/10 py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <SectionHeading first="PRICING" rest="" />
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {PRICING.map((p, i) => (
              <Reveal key={p.title} variant={i === 0 ? "left" : "right"} delay={i * 120}>
                <div className="h-full border border-white/15 p-10">
                  <h3 className="text-2xl font-light">{p.title}</h3>
                  <ul className="mt-8 space-y-4 text-white/75">
                    {p.lines.map((l) => (
                      <li key={l} className="flex gap-3 border-t border-white/10 pt-4">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: GOLD }} />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Expected Features & Amenities ─────────── */}
      <section className="border-t border-white/10 py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading first="EXPECTED" rest="Features & Amenities" />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((a, i) => (
              <Reveal key={a} delay={(i % 3) * 80}>
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: GOLD }} />
                  <span className="text-white/80">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="border-t border-white/10 py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <SectionHeading first="WHY" rest="Aurum" />
          </Reveal>
          <div className="mt-16">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 90}>
                <div className="border-b border-white/15">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between py-7 text-left"
                  >
                    <span className="pr-6 text-lg font-medium">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === i ? 600 : 0, opacity: openFaq === i ? 1 : 0 }}
                  >
                    <p className="whitespace-pre-line pb-7 text-white/65 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Location map ─────────── */}
      <section id="location" className="border-t border-white/10 py-10 md:py-14 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading first="THE" rest="Location" />
          </Reveal>
          <Reveal className="mt-12">
            <div className="relative">
              <div className="absolute left-4 top-4 z-10 max-w-xs bg-white p-4 text-black shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold">AURUM</p>
                    <p className="mt-1 text-sm text-gray-600">Adekola Balogun Street, Lekki, Lagos</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              <iframe
                title="Aurum location"
                src="https://www.google.com/maps?q=Adekola%20Balogun%20Street%2C%20Lekki%2C%20Lagos&output=embed"
                className="h-[60vh] w-full border-0 grayscale-[0.2]"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Proximity & Accessibility */}
          <Reveal className="mt-24">
            <h3 className="mb-12 text-center text-xl tracking-[0.3em] uppercase text-white/70">
              Proximity &amp; Accessibility
            </h3>
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              {PROXIMITY.map((p) => (
                <div key={p.place} className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <span className="flex items-center gap-3 text-white/85">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: GOLD }} />
                    {p.place}
                  </span>
                  <span className="flex-shrink-0 text-sm tracking-wide" style={{ color: GOLD }}>
                    {p.time}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <BuyerRegistrationModal />

      <Footer />
    </div>
  );
}
