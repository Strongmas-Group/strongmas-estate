import MediaImage from "@/components/custom/media-image";
import Link from "next/link";
import { posts } from "@/app/blog/posts";

const GOLD = "#B8923E";

/** Latest three articles, surfaced on the homepage to feed the content ecosystem. */
const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

export default function Insights() {
  return (
    <section id="insights" className="bg-white py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
              News &amp; Insights
            </p>
            <h2 className="mt-3 font-headline text-3xl font-bold text-gray-900 md:text-4xl">
              From the Journal
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-[11px] tracking-[0.25em] uppercase text-gray-500 hover:text-gray-900"
          >
            View all →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <MediaImage
                  src={post.heroImage}
                  alt={post.heroAlt}
                  className=" transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-gray-500">{post.displayDate}</p>
                <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-gray-900 group-hover:text-[#B8923E]">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <span className="mt-5 text-[11px] tracking-[0.25em] uppercase text-gray-700 group-hover:text-[#B8923E]">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
