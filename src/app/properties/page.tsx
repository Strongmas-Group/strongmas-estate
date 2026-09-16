import type { Metadata } from "next";
import MediaImage from "@/components/custom/media-image";
import Link from "next/link";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import PropertyPortfolio from "@/components/custom/property-portfolio";
import { properties } from "@/lib/properties";

const SITE = "https://strongmasresidence.com";

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");
const titleCase = (s: string) => s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

export const metadata: Metadata = {
  title: "Our Developments | Luxury Property in Lagos",
  description:
    "Explore the Strongmas Development portfolio, luxury apartments, penthouses, terrace duplexes and commercial property across Lekki Phase 1, Victoria Island, Ikota G.R.A. and Lagos Island.",
  alternates: { canonical: "/properties" },
  openGraph: {
    type: "website",
    url: "/properties",
    title: "Our Developments | Strongmas Development",
    description:
      "Luxury apartments, penthouses and terrace duplexes across Lekki Phase 1, Victoria Island, Ikota G.R.A. and Lagos Island.",
  },
};

export default function PropertiesPage() {
  // ItemList schema so Google can read this as the portfolio hub.
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Strongmas Development",
    itemListElement: properties.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: titleCase(p.name),
      url: `${SITE}/properties/${slugify(p.name)}`,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />

      <main className="flex-grow pt-20">
        <section className="relative h-[40vh] bg-black md:h-[50vh]">
          <MediaImage
            src={properties[0].images[0]}
            alt="Strongmas Development projects in Lagos"
            className=" opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
          <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 text-white">
            <h1 className="font-headline text-3xl font-bold md:text-5xl">OUR DEVELOPMENTS</h1>
            <p className="mt-2 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / Developments
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 text-center">
          <div className="container mx-auto max-w-3xl px-6">
            <h2 className="font-headline text-2xl font-bold text-gray-800 md:text-3xl">
              Luxury Property Across Lagos
            </h2>
            <p className="mt-4 text-gray-600">
              From smart terrace duplexes in Lekki Phase 1 to a signature high-rise in Victoria
              Island, the Strongmas Development portfolio spans residential and commercial development
              across the city.
            </p>
          </div>
        </section>

        <PropertyPortfolio properties={properties} />
      </main>

      <Footer />
    </div>
  );
}
