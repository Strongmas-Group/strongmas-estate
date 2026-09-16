"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";
import type { Property } from "@/lib/properties";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { Button } from "@/components/ui/button";
import { notFound, useParams } from "next/navigation";
import { CheckCircle2, Download, FileText, MapPin } from "lucide-react";
import ProjectInsights from "@/components/custom/project-insights";

const NAVY = "#142B54";

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

/** Project names are stored upper case for headlines; prose reads better cased. */
const titleCase = (s: string) => s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

/** "carSpacePerUnit" -> "Car Space Per Unit" */
const humanise = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

/**
 * The in-page sections. Every project page renders all of them in the same
 * order, so the portfolio reads consistently even where a project carries
 * less data than another; the sparse ones fall back to an enquiry prompt
 * rather than disappearing.
 */
const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "gallery", label: "Gallery" },
  { id: "units", label: "Units" },
  { id: "features", label: "Features" },
  { id: "floor-plan", label: "Floor Plan" },
  { id: "location", label: "Location" },
];

export default function PropertyPage() {
  const params = useParams();
  const slug = String(params.slug);

  const property = properties.find((p) => slugify(p.name) === slug);

  const [mainImage, setMainImage] = React.useState(property?.images?.[0] || "");

  React.useEffect(() => {
    if (property) {
      setMainImage(property.images[0]);
    }
  }, [property]);

  if (!property) {
    return notFound();
  }

  const address = property.summary?.address ?? `${property.location}, Lagos, Nigeria`;
  const name = titleCase(property.name);

  const allFeatures = [
    ...(property.signatureAmenities ?? []),
    ...(property.keyFeatures ?? []),
    ...(property.features ?? []),
    ...(property.safetyAndSecurity ?? []),
  ].filter(Boolean);

  const facts = [
    { label: "Location", value: property.location },
    { label: "Property Type", value: property.summary?.propertyType ?? property.summary?.project },
    { label: "Typology", value: property.summary?.typology },
    { label: "Status", value: property.summary?.saleStatus ?? property.status },
  ].filter((fact) => Boolean(fact.value));

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] bg-black text-white">
          {mainImage && (
            <Image src={mainImage} alt={property.name} fill className="object-cover opacity-60" />
          )}
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex flex-col justify-end container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <p className="text-sm text-gray-300">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/properties" className="hover:underline">
                Our Properties
              </Link>{" "}
              / <span className="font-medium text-white">{property.name}</span>
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">{property.name}</h1>
              {property.tag && (
                <span className="rounded-full border border-white/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
                  {property.tag}
                </span>
              )}
            </div>
            <p className="text-gray-300 mt-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              {address}
            </p>
          </div>
        </section>

        {/* Section nav — identical on every project page */}
        <nav className="sticky top-[68px] z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
          <div className="container mx-auto flex gap-6 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-[#142B54]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Key facts */}
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-900">{String(fact.value)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Overview + summary + brochure */}
        <section id="overview" className="scroll-mt-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  {property.description ??
                    `${name} is part of the Strongmas Development portfolio in ${property.location}, Lagos. Speak to our team for the full project brief.`}
                </p>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-lg h-fit">
                <h2 className="text-2xl font-bold font-headline mb-6 text-black">
                  Property Summary
                </h2>
                <div className="space-y-4 text-sm">
                  {Object.entries(property.summary)
                    .filter(([key, value]) => key !== "brochureUrl" && value !== undefined)
                    .map(([key, value]) => (
                      <div className="flex justify-between gap-4" key={key}>
                        <span className="font-medium text-black">{humanise(key)}:</span>
                        <span className="text-gray-600 text-right">{String(value)}</span>
                      </div>
                    ))}
                </div>
                <BrochureCta property={property} className="mt-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-40 bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8">Gallery</h2>
            {mainImage && (
              <div className="relative w-full h-[300px] md:h-[560px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={mainImage}
                  alt={property.name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out"
                />
              </div>
            )}
            {property.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 md:gap-4">
                {property.images.slice(0, 5).map((img, index) => (
                  <button
                    key={img}
                    type="button"
                    aria-label={`View ${property.name} image ${index + 1}`}
                    onClick={() => setMainImage(img)}
                    className={`relative w-full h-16 md:h-24 rounded-md overflow-hidden border-2 ${
                      mainImage === img ? "border-[#142B54]" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${property.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Units */}
        <section id="units" className="scroll-mt-40 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8">Units & Pricing</h2>
            {property.availableUnits && property.availableUnits.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.availableUnits.map((unit) => (
                  <div key={unit.type} className="p-6 border rounded-lg">
                    <h3 className="font-bold text-lg">{unit.type}</h3>
                    {Object.entries(unit)
                      .filter(([key, value]) => key !== "type" && value !== undefined)
                      .map(([key, value]) => (
                        <div className="flex justify-between gap-4 text-sm mt-2" key={key}>
                          <span className="font-medium text-black">{humanise(key)}:</span>
                          <span className="text-gray-600 text-right">
                            {Array.isArray(value) ? value.join(", ") : String(value)}
                          </span>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8">
                <p className="text-gray-700">
                  {property.summary?.typology
                    ? `${name} is a ${property.summary.typology} development.`
                    : `Unit configurations for ${name} are confirmed on enquiry.`}{" "}
                  {property.summary?.saleStatus && (
                    <span className="font-medium text-gray-900">
                      Current status: {property.summary.saleStatus}.
                    </span>
                  )}
                </p>
                <Button
                  asChild
                  className="mt-6 bg-[#142B54] text-white hover:bg-[#142B54]/90 font-headline"
                >
                  <Link href={`/contact?project=${slugify(property.name)}`}>
                    ENQUIRE ABOUT UNITS
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-40 bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8">
              Features & Amenities
            </h2>
            {allFeatures.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700">
                The full specification for {name} is available in the project brief.
              </p>
            )}
          </div>
        </section>

        {/* Floor plan */}
        <section id="floor-plan" className="scroll-mt-40 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8">Floor Plan</h2>
            {property.floorPlan && property.floorPlan.length > 0 ? (
              <div className="space-y-4">
                {property.floorPlan.map((item) => (
                  <div key={item.floor} className="p-6 border rounded-lg">
                    <h3 className="font-bold text-lg">{item.floor}</h3>
                    <p className="text-gray-600 mt-1">{item.use}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8">
                <p className="text-gray-700">
                  Detailed floor plans for {name} are shared on request, and are included in the
                  project brochure where available.
                </p>
                <BrochureCta property={property} className="mt-6 sm:w-auto" />
              </div>
            )}
          </div>
        </section>

        {/* Virtual tour, where one exists */}
        {property.virtualtour && property.virtualtour.length > 0 && (
          <section id="virtual-tour" className="scroll-mt-40 bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Virtual Tour</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Take an immersive tour of {name}. Use your mouse or touch to navigate and explore
                every corner. On mobile, rotate to landscape for the best view.
              </p>
              <div className="w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute left-0 top-0 h-full w-full border-none"
                    style={{ minHeight: "300px" }}
                    allow="xr-spatial-tracking;vr;gyroscope;accelerometer;fullscreen;"
                    allowFullScreen
                    src={property.virtualtour[0]}
                    title={`${property.name} virtual tour`}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Location */}
        <section id="location" className="scroll-mt-40 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8">
              Location & Neighbourhood
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="flex items-start gap-2 text-gray-700">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0" style={{ color: NAVY }} />
                  {address}
                </p>
                {property.proximities && property.proximities.length > 0 ? (
                  <>
                    <h3 className="mt-8 mb-4 font-headline text-lg font-bold">What's Nearby</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {property.proximities.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="mt-6 text-gray-600">
                    {name} sits in {property.location}, Lagos, within reach of the schools, retail
                    and business hubs that define the neighbourhood. Our team can walk you through
                    the immediate surroundings on an inspection.
                  </p>
                )}
                <Button
                  asChild
                  className="mt-8 bg-[#142B54] text-white hover:bg-[#142B54]/90 font-headline"
                >
                  <Link href="/book-inspection">BOOK AN INSPECTION</Link>
                </Button>
              </div>

              <div className="h-[320px] w-full overflow-hidden rounded-lg md:h-[420px]">
                <iframe
                  title={`Map showing ${property.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <ProjectInsights projectSlug={slug} projectName={name} />
      </main>
      <Footer />
    </div>
  );
}

/**
 * Brochure call to action. Projects with a PDF on file download it; the rest
 * route the request to the team, so the section is present either way.
 */
function BrochureCta({ property, className = "" }: { property: Property; className?: string }) {
  const brochure = property.summary?.brochureUrl;

  if (brochure) {
    return (
      <Button
        asChild
        size="lg"
        className={`w-full bg-[#142B54] text-white hover:bg-[#142B54]/90 font-headline ${className}`}
      >
        <a href={brochure} target="_blank" rel="noopener noreferrer">
          <Download className="mr-2 h-4 w-4" />
          DOWNLOAD BROCHURE
        </a>
      </Button>
    );
  }

  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className={`w-full bg-transparent border-[#142B54] text-[#142B54] hover:bg-[#142B54] hover:text-white font-headline ${className}`}
    >
      <Link href={`/contact?brochure=${slugify(property.name)}`}>
        <FileText className="mr-2 h-4 w-4" />
        REQUEST BROCHURE
      </Link>
    </Button>
  );
}
