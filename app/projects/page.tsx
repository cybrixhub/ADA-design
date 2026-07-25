"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, MapPin, Search, X } from "lucide-react";
import { projects, categories } from "@/lib/projects";
import { formatAddress } from "@/lib/format-address";
import Lightbox from "@/components/Lightbox";

const CATEGORY_ORDER = [
  "All",
  "Single Storey Dwelling",
  "Double Storey Dwelling",
  "Dual Occupancy",
  "Dwelling with Granny Flat",
  "Secondary Dwelling & Studio",
  "Rural House",
  "Multidwelling (Townhouses)",
  "Medical Centre",
  "Industrial / Sheds",
];

const displayCategories = ["All", ...categories.filter((c) => c !== "Uncategorized")].sort(
  (a, b) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b)
);

const categoryCounts: Record<string, number> = { All: projects.length };
for (const p of projects) {
  categoryCounts[p.category] = (categoryCounts[p.category] ?? 0) + 1;
}

function ProjectsContent() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState(() => {
    const cat = searchParams.get("category") ?? "All";
    return displayCategories.includes(cat) ? cat : "All";
  });

  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = active === "All" ? projects : projects.filter((p) => p.category === active);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [active, search]);

  return (
    <>
      {/* ── HEADER ── */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-linen">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="label-text text-stone mb-6">What we build</p>
              <h1 className="font-serif text-display-lg text-bark">Projects</h1>
            </div>
            <p className="text-stone font-light text-lg max-w-md leading-relaxed pb-2">
              Across New South Wales — residential dwellings, medical facilities, and industrial developments, each designed for its site and use.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="sticky top-16 md:top-20 z-30 bg-off-white/95 backdrop-blur border-b border-linen">
        <div className="container-wide">
          <div className="flex items-center gap-3 pt-3 pb-2 border-b border-linen/60">
            <Search size={13} className="text-stone/50 shrink-0" />
            <input
              type="text"
              placeholder="Search projects…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-bark font-light text-sm placeholder:text-stone/40"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="text-stone/40 hover:text-bark transition-colors"
              >
                <X size={13} />
              </button>
            )}
          </div>
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {displayCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-4 py-2.5 text-label tracking-[0.15em] uppercase transition-all duration-200 border-b-2 ${
                  active === cat
                    ? "border-bark text-bark"
                    : "border-transparent text-stone hover:text-bark hover:border-sand/50"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-[0.55em] opacity-40 font-normal normal-case tracking-normal">
                  {categoryCounts[cat] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROJECT GRID ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-sand/25">
            {filtered.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group cursor-pointer border-r border-b border-sand/25 p-6 md:p-8 flex flex-col bg-off-white hover:bg-cream/40 transition-colors duration-500"
              >
                <div className="flex items-center justify-end mb-6">
                  <span className="label-text text-terracotta text-[0.65rem]">
                    · {project.category}
                  </span>
                </div>

                <div
                  className="relative aspect-[4/3] w-full overflow-hidden ring-1 ring-transparent group-hover:ring-sand/50 transition-all duration-500 bg-linen"
                  onClick={(e) => {
                    if (project.images.length > 0) {
                      e.preventDefault();
                      e.stopPropagation();
                      setLightbox({ images: project.images, index: 0 });
                    }
                  }}
                >
                  {project.images[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone">
                      <p className="label-text">Coming soon</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/15 transition-colors duration-500" />
                </div>

                <div className="pt-6 mt-auto">
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin size={11} className="text-terracotta shrink-0" />
                    <p className="label-text text-stone truncate">{formatAddress(project.address)}</p>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-bark leading-tight [text-wrap:balance]">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-stone mb-4">
                {search ? `No results for "${search}"` : "Nothing here yet."}
              </p>
              <button
                onClick={() => { setActive("All"); setSearch(""); }}
                className="label-text text-terracotta underline underline-offset-4"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 bg-bark">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="label-text text-sand/40 mb-4">Talk to the studio</p>
            <h2 className="font-serif text-2xl md:text-3xl text-off-white">
              Have a site in mind?
            </h2>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Start an enquiry <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsContent />
    </Suspense>
  );
}
