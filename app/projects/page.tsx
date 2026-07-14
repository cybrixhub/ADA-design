"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { projects, categories } from "@/lib/projects";

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

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      {/* ── HEADER ── */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-24 bg-linen">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="label-text text-stone mb-6">What we build</p>
              <h1 className="font-serif text-display-lg text-bark">Projects</h1>
            </div>
            <p className="text-stone font-light text-lg max-w-md leading-relaxed pb-2">
              {projects.length} projects across New South Wales — residential dwellings, medical facilities, and industrial developments, each designed for its site and use.
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <div className="sticky top-16 md:top-20 z-30 bg-off-white/95 backdrop-blur border-b border-linen">
        <div className="container-wide">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {displayCategories.map((cat) => {
              const count =
                cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`shrink-0 px-4 py-3 text-label tracking-[0.15em] uppercase transition-all duration-200 border-b-2 ${
                    active === cat
                      ? "border-bark text-bark"
                      : "border-transparent text-stone hover:text-bark hover:border-sand/50"
                  }`}
                >
                  {cat}
                  <span className="ml-2 text-[0.6rem] text-sand">{count}</span>
                </button>
              );
            })}
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
                {/* Editorial index */}
                <div className="flex items-center justify-between mb-6">
                  <p className="label-text text-sand text-[0.65rem]">
                    {String(i + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
                  </p>
                  <span className="label-text text-terracotta text-[0.65rem]">
                    · {project.category}
                  </span>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden ring-1 ring-transparent group-hover:ring-sand/50 transition-all duration-500 bg-linen">
                  {project.images[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone">
                      <p className="label-text">Coming soon</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/15 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-off-white text-bark p-3">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="pt-6 mt-auto">
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin size={11} className="text-terracotta shrink-0" />
                    <p className="label-text text-stone truncate">{project.address}</p>
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
              <p className="font-serif text-3xl text-stone mb-4">Nothing here yet.</p>
              <button onClick={() => setActive("All")} className="label-text text-terracotta underline underline-offset-4">
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-bark">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="label-text text-sand/40 mb-4">Talk to the studio</p>
            <h2 className="font-serif text-4xl md:text-5xl text-off-white">
              Have a site in mind?
            </h2>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Start an enquiry <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
