"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  HandCoins,
  Maximize2,
  Phone,
  MessageCircle,
  Video,
} from "lucide-react";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { cld, cldSrcSet } from "@/lib/cld";
import BuyerRegistrationModal, { openRegister } from "@/components/custom/buyer-registration-modal";

const GOLD = "#B8923E";

// TODO: replace placeholders with the real Aurum renders / PDFs.
const PH = "/aurum.png";
const PHONE = "tel:+2340000000000";
const WHATSAPP = "https://wa.me/2340000000000";
const BROCHURE_URL = "/Arurum%20Broc-compressed.pdf";

type Unit = {
  slug: string;
  label: string;
  title: string;
  price: string;
  size: string;
  description: string;
  payment: string;
  outright?: string;
  hero?: string;
  gallery?: { label: string; imgs: string[] }[];
};

const UNITS: Record<string, Unit> = {
  "2-bedroom": {
    slug: "2-bedroom",
    label: "2 Bedroom Apartment",
    title: "Two Bedrooms",
    price: "₦320,000,000",
    size: "Spacious 2-Bed · Private Balcony", // TODO: confirm sqft
    description:
      "A contemporary 2-bedroom residence at AURUM, blending refined architecture, private balconies, and elevated city views in the heart of Lekki Phase 1 — one of Lagos’ most desirable and high-value destinations.",
    payment: "₦350,000,000 — 40% initial deposit (₦128,000,000), balance spread across 12 / 18 months.",
    outright: "Outright payment: ₦320,000,000.",
    hero: "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736245/2_Bed_3_ud9lln.png",
    gallery: [
      {
        label: "Bedroom",
        imgs: [
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736237/2_Bed_4_g1jb8v.png",
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736235/2_Bed_5_plebjg.png",
        ],
      },
      {
        label: "Living Room",
        imgs: [
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736245/2_Bed_3_ud9lln.png",
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736233/2_Bed_1_xwly3c.png",
        ],
      },
      {
        label: "Exterior",
        imgs: [
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736236/ChatGPT_Image_Jun_29_2026_11_36_53_AM_lwowfu.png",
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736240/ChatGPT_Image_Jun_29_2026_11_31_50_AM_dr2rok.png",
        ],
      },
    ],
  },
  "3-bedroom-penthouse": {
    slug: "3-bedroom-penthouse",
    label: "3 Bedroom Penthouse",
    title: "Three Bedroom Penthouse",
    price: "Price To Be Announced",
    size: "Exclusive Top-Floor Residence",
    description:
      "An exclusive 3-bedroom duplex penthouse at AURUM, crowned by a curated rooftop experience with a gym and swimming pool — the pinnacle of premium living in Lekki Phase 1.",
    payment: "40% initial deposit. Final pricing to be announced.",
    hero: "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736253/3_Bed_6_c8k5ab.png",
    gallery: [
      {
        label: "Bedroom",
        imgs: [
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736260/3_Bed_4_yex4os.png",
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736253/3_Bed_6_c8k5ab.png",
        ],
      },
      {
        label: "Living Room",
        imgs: [
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736262/3_Bed_2_i069gs.png",
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736262/3_Bed_3_ulc4du.png",
        ],
      },
      {
        label: "Exterior",
        imgs: [
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736236/ChatGPT_Image_Jun_29_2026_11_36_53_AM_lwowfu.png",
          "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736240/ChatGPT_Image_Jun_29_2026_11_31_50_AM_dr2rok.png",
        ],
      },
    ],
  },
};

const galleryCats = [
  {
    label: "Bedroom",
    imgs: [
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736237/2_Bed_4_g1jb8v.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736235/2_Bed_5_plebjg.png",
    ],
  },
  {
    label: "Living Room",
    imgs: [
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736245/2_Bed_3_ud9lln.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736233/2_Bed_1_xwly3c.png",
    ],
  },
  {
    label: "Exterior",
    imgs: [
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736236/ChatGPT_Image_Jun_29_2026_11_36_53_AM_lwowfu.png",
      "https://res.cloudinary.com/dbtqditjh/image/upload/v1782736240/ChatGPT_Image_Jun_29_2026_11_31_50_AM_dr2rok.png",
    ],
  },
];

const TABS = ["Gallery", "Location", "Payment", "Brochure"] as const;

const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
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
        transform: "translateY(60px)",
        filter: "blur(6px)",
        transition:
          "opacity 1100ms cubic-bezier(0.16,1,0.3,1), transform 1100ms cubic-bezier(0.16,1,0.3,1), filter 1100ms ease",
      }}
    >
      {children}
    </div>
  );
};

export default function UnitDetailPage() {
  const params = useParams();
  const slug = String(params.unit);
  const unit = UNITS[slug];

  const [tab, setTab] = useState<(typeof TABS)[number]>("Gallery");
  const [cat, setCat] = useState(0);
  const [shot, setShot] = useState(0);
  const cats = unit?.gallery ?? galleryCats;

  // Warm the cache for every gallery image so tab switches are instant.
  useEffect(() => {
    cats.forEach((c) =>
      c.imgs.forEach((src) => {
        const img = new Image();
        img.src = cld(src, 1024);
      })
    );
  }, [cats]);

  if (!unit) return notFound();

  const imgs = cats[cat].imgs;

  return (
    <div className="relative overflow-x-clip text-white">
      {/* Soft, luxurious animated background — drifting aurora, corner glows & floating sparkles */}
      <div className="aurum-bg fixed inset-0 -z-10 overflow-hidden bg-[#0c0c0d]">
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

      {/* Floating contact rail */}
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

      {/* ── Hero ── */}
      <section className="relative flex h-[70vh] items-center overflow-hidden">
        <img
          className="aurum-kenburns absolute inset-0 h-full w-full object-cover"
          src={unit.hero ? cld(unit.hero, 1920) : PH}
          srcSet={unit.hero ? cldSrcSet(unit.hero) : undefined}
          sizes="100vw"
          alt={unit.label}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <h1 className="aurum-title-in max-w-2xl text-3xl md:text-5xl font-light uppercase leading-tight tracking-[0.08em]">
            {unit.label}
          </h1>
          <button
            type="button"
            onClick={openRegister}
            className="mt-8 inline-block border border-white/40 bg-white/5 px-10 py-4 text-xs tracking-[0.3em] uppercase backdrop-blur-sm transition-colors hover:border-white"
          >
            Register Now For More Details
          </button>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <div className="mx-auto max-w-6xl px-6 py-6 text-[11px] tracking-[0.25em] uppercase text-white/40">
        <Link href="/" className="hover:text-white">Home</Link> &nbsp;&gt;&nbsp;
        <Link href="/properties/aurum" className="hover:text-white"> Aurum</Link> &nbsp;&gt;&nbsp;
        <span className="text-white/70"> {unit.label}</span>
      </div>

      {/* ── Title & location ── */}
      <div className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.12em]">Aurum</h2>
        <p className="mt-2 text-sm tracking-[0.3em] uppercase text-white/50">Adekola Balogun Street, Lekki, Lagos</p>
      </div>

      {/* ── Tabbed section: Gallery / Location / Payment / Brochure ── */}
      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-wrap gap-8 border-b border-white/10">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative pb-4 text-sm tracking-[0.2em] uppercase transition-colors ${
                  tab === t ? "text-white" : "text-white/45 hover:text-white/80"
                }`}
              >
                {t}
                {tab === t && (
                  <span className="absolute -bottom-px left-0 right-0 h-0.5" style={{ background: GOLD }} />
                )}
              </button>
            ))}
          </div>

          {/* Gallery */}
          {tab === "Gallery" && (
            <Reveal>
              <div className="mb-6 flex flex-wrap gap-2">
                {cats.map((c, i) => (
                  <button
                    key={c.label}
                    onClick={() => {
                      setCat(i);
                      setShot(0);
                    }}
                    className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-colors ${
                      cat === i ? "bg-white text-black" : "border border-white/20 text-white/70 hover:text-white"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <div className="relative">
                <img
                  key={`${cat}-${shot}`}
                  src={cld(imgs[shot], 1024)}
                  srcSet={cldSrcSet(imgs[shot])}
                  sizes="(min-width: 768px) 768px, 100vw"
                  alt={cats[cat].label}
                  loading="eager"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover"
                />
                <button
                  onClick={() => setShot((s) => (s - 1 + imgs.length) % imgs.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-9 w-9" />
                </button>
                <button
                  onClick={() => setShot((s) => (s + 1) % imgs.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                  aria-label="Next"
                >
                  <ChevronRight className="h-9 w-9" />
                </button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {imgs.map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: i === shot ? GOLD : "rgba(255,255,255,0.4)" }}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* Location */}
          {tab === "Location" && (
            <Reveal>
              <iframe
                title="Aurum location"
                src="https://www.google.com/maps?q=Adekola%20Balogun%20Street%2C%20Lekki%2C%20Lagos&output=embed"
                className="h-[55vh] w-full border-0 grayscale-[0.2]"
                loading="lazy"
              />
            </Reveal>
          )}

          {/* Payment */}
          {tab === "Payment" && (
            <Reveal>
              <div className="border border-white/15 p-10">
                <h3 className="text-2xl font-light uppercase tracking-[0.12em]">Payment Plan</h3>
                {unit.outright && (
                  <div className="mt-6">
                    <p className="text-xs tracking-[0.25em] uppercase" style={{ color: GOLD }}>
                      Outright Payment
                    </p>
                    <p className="mt-2 max-w-2xl text-white/70 leading-relaxed">{unit.outright}</p>
                  </div>
                )}
                <div className="mt-6">
                  <p className="text-xs tracking-[0.25em] uppercase" style={{ color: GOLD }}>
                    Installment Plan
                  </p>
                  <p className="mt-2 max-w-2xl text-white/70 leading-relaxed">{unit.payment}</p>
                </div>
              </div>
            </Reveal>
          )}

          {/* Brochure */}
          {tab === "Brochure" && (
            <Reveal>
              <div className="flex flex-col items-start gap-6 border border-white/15 p-10">
                <h3 className="text-2xl font-light uppercase tracking-[0.12em]">Download Brochure</h3>
                <p className="max-w-2xl text-white/70">
                  Get the full AURUM brochure with floor plans, finishes, pricing and payment details.
                </p>
                <a
                  href={BROCHURE_URL}
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.25em] uppercase text-black"
                  style={{ background: GOLD }}
                >
                  <Download className="h-4 w-4" /> Download Brochure
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Key details ── */}
      <section className="border-t border-white/10 py-20">
        <Reveal className="mx-auto max-w-6xl px-6">
          <p className="text-sm tracking-[0.25em] uppercase text-white/50">
            {unit.title} <span className="text-white/30">|</span> Aurum
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 text-2xl">
                <HandCoins className="h-6 w-6" style={{ color: GOLD }} />
                <span>Starting {unit.price}</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-lg text-white/70">
                <Maximize2 className="h-5 w-5" style={{ color: GOLD }} />
                <span>{unit.size}</span>
              </div>
              <button
                type="button"
                onClick={openRegister}
                className="mt-8 inline-block px-10 py-4 text-xs tracking-[0.25em] uppercase text-black"
                style={{ background: GOLD }}
              >
                Book Now
              </button>
            </div>
            <p className="text-white/70 leading-relaxed">{unit.description}</p>
          </div>
        </Reveal>
      </section>

      {/* ── Downloads ── */}
      <section className="border-t border-white/10 py-20">
        <Reveal className="mx-auto max-w-6xl px-6">
          <h3 className="mb-10 text-2xl font-light uppercase tracking-[0.12em]">Downloads</h3>
          <a
            href={BROCHURE_URL}
            className="flex max-w-md items-center justify-between border border-white/15 p-6 transition-colors hover:border-[#B8923E]/60"
          >
            <span className="flex items-center gap-4">
              <Download className="h-5 w-5" style={{ color: GOLD }} />
              <span className="tracking-[0.15em] uppercase">Brochure</span>
            </span>
            <Download className="h-4 w-4 text-white/50" />
          </a>
        </Reveal>
      </section>

      <BuyerRegistrationModal />

      <Footer />
    </div>
  );
}
