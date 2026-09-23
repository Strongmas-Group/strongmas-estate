import type { Metadata } from "next";
import MediaImage from "@/components/custom/media-image";
import Link from "next/link";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { publishedPosts, externalFeatures } from "./posts";

export const metadata: Metadata = {
  title: "News & Insights | Luxury Real Estate in Lagos",
  description:
    "Insights on luxury apartments in Lekki Phase 1, smart homes in Lagos, and property investment from Strongmas Development.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "News & Insights | Strongmas Development",
    description:
      "Insights on luxury apartments in Lekki Phase 1, smart homes in Lagos, and property investment.",
  },
};

type Card = {
  key: string;
  href: string;
  external: boolean;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  displayDate: string;
  author: string;
  date: string;
  badge?: string;
};

/** Internal articles and external features, merged and sorted newest first. */
const cards: Card[] = [
  ...externalFeatures.map((f) => ({
    key: f.slug,
    href: f.externalUrl,
    external: true,
    title: f.title,
    excerpt: f.excerpt,
    image: f.image,
    alt: f.title,
    displayDate: f.displayDate,
    author: f.author,
    date: f.date,
    badge: f.badge,
  })),
  ...publishedPosts.map((p) => ({
    key: p.slug,
    href: `/blog/${p.slug}`,
    external: false,
    title: p.title,
    excerpt: p.excerpt,
    image: p.heroImage,
    alt: p.heroAlt,
    displayDate: p.displayDate,
    author: p.author,
    date: p.date,
  })),
].sort((a, b) => b.date.localeCompare(a.date));

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative h-[40vh] bg-black md:h-[50vh]">
          <MediaImage
            src="https://res.cloudinary.com/dbczzmftw/image/upload/v1753056651/izgmyjnwklmrqjgzsi7l.jpg"
            alt="Strongmas Development project in Lagos"
            className=" opacity-70"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/50" />
          <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 text-white sm:px-6 lg:px-8">
            <h1 className="font-headline text-3xl font-bold md:text-5xl">NEWS &amp; INSIGHTS</h1>
            <p className="mt-2 font-sans text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / News &amp; Insights
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 font-headline text-2xl font-bold text-gray-800 md:text-4xl">
              Insights, Updates &amp; Investment Opportunities
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Guides to luxury apartments in Lekki Phase 1, smart homes in Lagos, market trends and
              investment strategy from Strongmas Development.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const linkProps = card.external
                ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: card.href };

              return (
                <div
                  key={card.key}
                  className="overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="relative h-60 w-full">
                    <MediaImage
                      src={card.image}
                      alt={card.alt}
                      className=""
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    {card.badge && (
                      <span className="absolute left-4 top-4 z-10 rounded-full bg-black/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-sm text-gray-500">
                      {card.displayDate} • {card.author}
                    </p>
                    <h2 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900">
                      {card.title}
                    </h2>
                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-700">
                      {card.excerpt}
                    </p>
                    <Link {...linkProps} className="font-semibold text-[#B8923E] hover:opacity-80">
                      {card.external ? "Read the full story →" : "Read More →"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
