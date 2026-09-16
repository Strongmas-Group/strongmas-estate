import MediaImage from "@/components/custom/media-image";
import Link from "next/link";
import { postsForProject } from "@/app/blog/posts";

const GOLD = "#B8923E";

/**
 * "News & Insights" strip for a project page. Renders every article that
 * names this project slug in its `projects` list, so wiring a new article
 * into a project page is a matter of tagging it in posts.ts.
 *
 * Renders nothing when a project has no articles yet.
 */
export default function ProjectInsights({
  projectSlug,
  projectName,
  theme = "light",
  limit = 3,
}: {
  projectSlug: string;
  projectName: string;
  /** "dark" matches the Aurum page treatment; "light" matches the standard project template. */
  theme?: "light" | "dark";
  limit?: number;
}) {
  const articles = postsForProject(projectSlug).slice(0, limit);
  if (articles.length === 0) return null;

  const dark = theme === "dark";

  return (
    <section
      id="insights"
      className={`scroll-mt-24 py-16 sm:py-20 ${
        dark ? "border-t border-white/10" : "border-t border-gray-200 bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>
              News &amp; Insights
            </p>
            <h2
              className={`mt-3 font-headline text-2xl font-bold md:text-3xl ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Reading around {projectName}
            </h2>
          </div>
          <Link
            href="/blog"
            className={`text-[11px] uppercase tracking-[0.25em] ${
              dark ? "text-white/60 hover:text-white" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            View all →
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {articles.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group flex flex-col overflow-hidden rounded-xl transition ${
                dark
                  ? "border border-white/10 hover:border-white/30"
                  : "bg-white shadow-md hover:shadow-xl"
              }`}
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
                <p
                  className={`text-[10px] uppercase tracking-[0.25em] ${
                    dark ? "" : "text-gray-500"
                  }`}
                  style={dark ? { color: GOLD } : undefined}
                >
                  {post.displayDate}
                </p>
                <h3
                  className={`mt-3 line-clamp-2 text-base font-bold leading-snug ${
                    dark ? "text-white/90" : "text-gray-900 group-hover:text-[#B8923E]"
                  }`}
                >
                  {post.title}
                </h3>
                <p
                  className={`mt-3 line-clamp-3 flex-1 text-sm leading-relaxed ${
                    dark ? "text-white/50" : "text-gray-600"
                  }`}
                >
                  {post.excerpt}
                </p>
                <span
                  className={`mt-5 text-[11px] uppercase tracking-[0.25em] ${
                    dark ? "text-white/70 group-hover:text-white" : "text-gray-700"
                  }`}
                >
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
