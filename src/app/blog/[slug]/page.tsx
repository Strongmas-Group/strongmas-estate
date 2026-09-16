import type { Metadata } from "next";
import MediaImage from "@/components/custom/media-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { getPost, posts } from "../posts";

const SITE = "https://strongmasresidence.com";

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = (post.related ?? [])
    .map(getPost)
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.heroImage.startsWith("http") ? post.heroImage : `${SITE}${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${post.slug}` },
    author: { "@type": "Organization", name: post.author, url: SITE },
    publisher: {
      "@type": "Organization",
      name: "Strongmas Development Limited",
      url: SITE,
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] bg-black md:h-[60vh]">
          <MediaImage
            src={post.heroImage}
            alt={post.heroAlt}
            className=" opacity-70"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 text-white">
            <h1 className="max-w-3xl font-headline text-3xl font-bold leading-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/blog" className="hover:underline">
                News &amp; Insights
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-8 text-center">
          <p className="font-medium text-gray-700">
            {post.author} • {post.displayDate}
          </p>
        </section>

        {/* Body */}
        <article className="container mx-auto max-w-3xl px-6 py-16">
          {post.sections.map((section, i) => (
            <section key={i} className="mb-12">
              {section.heading && (
                <h2 className="mb-5 text-2xl font-bold text-gray-900 md:text-3xl">
                  {section.heading}
                </h2>
              )}
              {section.body.map((para, j) => (
                <p
                  key={j}
                  className="mb-5 leading-relaxed text-gray-700 [&_a]:text-[#B8923E] [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
              {section.image && (
                <div className="relative mt-8 h-[320px] w-full overflow-hidden rounded-2xl md:h-[460px]">
                  <MediaImage
                    src={section.image}
                    alt={section.imageAlt ?? section.heading ?? post.title}
                    className=""
                    sizes="(min-width: 768px) 768px, 100vw"
                  />
                </div>
              )}
            </section>
          ))}

          {/* Project CTA, the link back that makes the ecosystem work */}
          {post.cta && (
            <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#B8923E]">
                The Development
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">{post.cta.blurb}</p>
              <Link
                href={post.cta.href}
                className="mt-6 inline-block rounded-md bg-[#B8923E] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
              >
                {post.cta.label}
              </Link>
            </aside>
          )}

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related reading, internal linking between articles */}
        {related.length > 0 && (
          <section className="border-t border-gray-200 bg-gray-50 py-16">
            <div className="container mx-auto max-w-5xl px-6">
              <h2 className="mb-8 font-headline text-2xl font-bold text-gray-900">
                Continue reading
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative h-44 w-full">
                      <MediaImage
                        src={r.heroImage}
                        alt={r.heroAlt}
                        className=""
                        sizes="(min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="mb-2 text-xs text-gray-500">{r.displayDate}</p>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#B8923E]">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
