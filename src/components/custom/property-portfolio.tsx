"use client";

import * as React from "react";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import MediaImage from "@/components/custom/media-image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Property } from "@/lib/properties";

const GOLD = "#B8923E";

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");
const titleCase = (s: string) => s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
const isOngoing = (status: string) => status.toUpperCase() === "ONGOING";

type Filter = "all" | "ongoing" | "completed";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "ongoing", label: "Ongoing Projects" },
  { value: "completed", label: "Completed Projects" },
];

export default function PropertyPortfolio({ properties }: { properties: Property[] }) {
  const [filter, setFilter] = React.useState<Filter>("all");

  const ongoing = properties.filter((p) => isOngoing(p.status));
  const completed = properties.filter((p) => !isOngoing(p.status));

  const groups =
    filter === "ongoing"
      ? [{ title: "Ongoing Projects", items: ongoing }]
      : filter === "completed"
        ? [{ title: "Completed Projects", items: completed }]
        : [
            { title: "Ongoing Projects", items: ongoing },
            { title: "Completed Projects", items: completed },
          ];

  const shown = groups.reduce((total, group) => total + group.items.length, 0);

  return (
    <>
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{shown}</span>{" "}
            {shown === 1 ? "development" : "developments"}
          </p>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs uppercase tracking-[0.2em] text-gray-500 sm:block">
              Filter by
            </span>
            <Select value={filter} onValueChange={(value) => setFilter(value as Filter)}>
              <SelectTrigger
                aria-label="Filter developments by project status"
                className="h-11 w-full min-w-[220px] border-gray-300 bg-white text-sm font-medium text-gray-900 sm:w-auto"
              >
                {/* Rendering the label explicitly keeps the trigger populated in
                  the server-rendered HTML, before Radix registers its items. */}
                <SelectValue>{FILTERS.find((f) => f.value === filter)?.label}</SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900">
                {FILTERS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {groups.map((group, index) => (
        <ProjectGrid
          key={group.title}
          title={group.title}
          items={group.items}
          muted={index % 2 === 1}
        />
      ))}
    </>
  );
}

function ProjectGrid({
  title,
  items,
  muted = false,
}: {
  title: string;
  items: Property[];
  muted?: boolean;
}) {
  if (items.length === 0) return null;

  return (
    <section className={`py-16 ${muted ? "bg-gray-50" : "bg-white"}`}>
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="mb-10 font-headline text-2xl font-bold text-gray-900 md:text-3xl">
          {title}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.name} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ property }: { property: Property }) {
  const slug = slugify(property.name);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl">
      <Link href={`/properties/${slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <MediaImage
            src={property.images[0]}
            alt={`${titleCase(property.name)}, ${property.location}, Lagos`}
            className="transition duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          {property.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
              {property.tag}
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: GOLD }}>
          {property.location}
        </p>
        <Link href={`/properties/${slug}`}>
          <h3 className="mt-3 font-headline text-lg font-bold text-gray-900 group-hover:text-[#B8923E]">
            {titleCase(property.name)}
          </h3>
        </Link>
        {property.summary?.typology && (
          <p className="mt-2 text-sm text-gray-600">{property.summary.typology}</p>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-5">
          <Link
            href={`/properties/${slug}`}
            className="text-[11px] uppercase tracking-[0.25em] text-gray-700 hover:text-[#B8923E]"
          >
            View Development →
          </Link>
          <BrochureLink property={property} />
        </div>
      </div>
    </article>
  );
}

/**
 * Every card offers a brochure. Projects with a PDF on file download it
 * directly; the rest route the enquiry to the team so the call to action is
 * consistent across the portfolio.
 */
export function BrochureLink({ property }: { property: Property }) {
  const brochure = property.summary?.brochureUrl;

  if (brochure) {
    return (
      <a
        href={brochure}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#142B54] hover:opacity-70"
      >
        <Download className="h-4 w-4" />
        Brochure
      </a>
    );
  }

  return (
    <Link
      href={`/contact?brochure=${slugify(property.name)}`}
      className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 hover:text-[#142B54]"
    >
      <FileText className="h-4 w-4" />
      Request Brochure
    </Link>
  );
}
