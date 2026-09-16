import type { Metadata } from "next";

const OG_IMAGE = "/aurum.png";

export const metadata: Metadata = {
  title: "Aurum | Luxury Apartments in Lekki Phase 1, Lagos",
  description:
    "Luxury apartments in Lekki Phase 1, Aurum is a private collection of 18 residences on Adekola Balogun Street. 2-bedroom apartments and 3-bedroom penthouses from ₦320,000,000.",
  keywords: [
    // Primary
    "luxury apartments in Lekki Phase 1",
    // Secondary
    "2-bedroom apartments in Lekki Phase 1",
    "apartments for sale in Lekki Phase 1",
    "luxury apartments in Lekki",
    "luxury homes in Lekki",
    "smart homes in Lagos",
    "luxury residential development in Lagos",
    "premium apartments in Lekki Phase 1",
    "Aurum Strongmas Development",
  ],
  alternates: { canonical: "/properties/aurum" },
  openGraph: {
    type: "website",
    url: "/properties/aurum",
    title: "Aurum | Luxury Apartments in Lekki Phase 1, Lagos",
    description:
      "A private collection of luxury residences in Lekki Phase 1, Lagos, contemporary architecture, intelligent home technology and premium amenities.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Aurum by Strongmas Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurum | Luxury Apartments in Lekki Phase 1, Lagos",
    description:
      "A private collection of luxury residences in Lekki Phase 1, Lagos.",
    images: [OG_IMAGE],
  },
};

/** Structured data so Google can read Aurum as a real residential development. */
const schema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  name: "Aurum",
  url: "https://strongmasresidence.com/properties/aurum",
  description:
    "A private collection of luxury residences in Lekki Phase 1, Lagos, designed around contemporary architecture, intelligent home technology, premium amenities and effortless urban living.",
  numberOfAccommodationUnits: 18,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Adekola Balogun Street, Adjacent Pinnacle Filling Station",
    addressLocality: "Lekki Phase 1",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  developer: {
    "@type": "Organization",
    name: "Strongmas Development Limited",
    url: "https://strongmasresidence.com",
    email: "hello@strongmasng.com",
    telephone: "+234 901 077 7777",
  },
  amenityFeature: [
    "Rooftop Swimming Pool",
    "Fully Equipped Gym",
    "Children's Play Area",
    "Concierge Services",
    "High-Speed Elevators",
    "24-Hour CCTV & Access Control",
    "Standby Power",
    "Dedicated Resident Parking",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
};

export default function AurumLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
