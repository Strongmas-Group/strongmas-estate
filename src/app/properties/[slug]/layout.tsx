import type { Metadata } from "next";
import { properties } from "@/lib/properties";

const SITE = "https://strongmasresidence.com";

export const projectSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

const findProject = (slug: string) => properties.find((p) => projectSlug(p.name) === slug);

const titleCase = (s: string) => s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

/** Prerender every project page so crawlers get static HTML. */
export const generateStaticParams = () =>
  properties.map((p) => ({ slug: projectSlug(p.name) }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: "Development not found" };

  const name = titleCase(project.name);
  const description = (project.description ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 155);

  // The root template appends "| Strongmas Development"; skip it where the
  // project name already carries the brand, to avoid a doubled title.
  const heading = `${name} | ${project.location}, Lagos`;
  const title = name.includes("Strongmas")
    ? { absolute: `${heading} | Strongmas Development Limited` }
    : heading;

  return {
    title,
    description:
      description || `${name} by Strongmas Development in ${project.location}, Lagos.`,
    alternates: { canonical: `/properties/${slug}` },
    openGraph: {
      type: "website",
      url: `/properties/${slug}`,
      title: heading,
      description,
      images: project.images?.[0]
        ? [{ url: project.images[0], width: 1200, height: 630, alt: name }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: heading,
      description,
      images: project.images?.[0] ? [project.images[0]] : undefined,
    },
  };
}

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject(slug);

  const schema = project && {
    "@context": "https://schema.org",
    // Olive Mall is commercial; everything else in the portfolio is residential.
    "@type": project.summary?.propertyType === "Commercial" ? "Place" : "ApartmentComplex",
    name: titleCase(project.name),
    url: `${SITE}/properties/${slug}`,
    description: project.description,
    image: project.images?.[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: project.summary?.address ?? project.location,
      addressLocality: project.location,
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    developer: {
      "@type": "Organization",
      name: "Strongmas Development Limited",
      url: SITE,
      email: "hello@strongmasng.com",
      telephone: "+234 901 077 7777",
    },
  };

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      {children}
    </>
  );
}
