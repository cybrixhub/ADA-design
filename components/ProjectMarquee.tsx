"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const SLUGS = [
  "44-kidd-circuit-goulburn-nsw-2580",
  "12-dexter-road-lochinvar-nsw-2321",
  "6-brumby-sreet-seven-hills",
  "10-mccormack-street-arndell-park-nsw-2148",
];

const picked = SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
  (p): p is (typeof projects)[number] => Boolean(p)
);

const rest = projects
  .filter((p) => !SLUGS.includes(p.slug) && p.images?.length)
  .slice(0, Math.max(0, 6 - picked.length));

const items = [...picked, ...rest];
const loop = [...items, ...items];

export default function ProjectMarquee() {
  return (
    <section className="bg-off-white pt-16 md:pt-24 pb-4 overflow-hidden">
      <div className="container-wide mb-10 md:mb-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="label-text text-stone mb-4">In rotation</p>
            <h2 className="font-serif text-display-md text-bark [text-wrap:balance]">
              A slice of<br />
              <em className="text-terracotta">recent work.</em>
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 label-text text-terracotta hover:gap-4 transition-all"
          >
            All projects →
          </Link>
        </div>
      </div>

      <div className="group relative pb-14">
        <div className="flex gap-10 md:gap-14 w-max animate-[marquee_50s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <Link
              key={`${p.slug}-${i}`}
              href={`/projects/${p.slug}`}
              className="shrink-0 relative flex flex-col items-center group/item"
              aria-label={p.title}
            >
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-1 ring-sand/30 transition-all duration-500 group-hover/item:ring-terracotta/60 group-hover/item:scale-110 group-hover/item:shadow-[0_20px_50px_-20px_rgba(47,32,24,0.35)]">
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  fill
                  sizes="176px"
                  className="object-cover transition-transform duration-700 group-hover/item:scale-105"
                />
                <div className="absolute inset-0 bg-bark/10 group-hover/item:bg-bark/0 transition-colors duration-500" />
              </div>
              <div className="absolute top-full mt-3 w-[16rem] opacity-0 group-hover/item:opacity-100 translate-y-1 group-hover/item:translate-y-0 transition-all duration-300 text-center pointer-events-none">
                <p className="label-text text-terracotta">{p.category}</p>
                <p className="font-serif text-sm text-bark mt-1 leading-snug [text-wrap:balance]">
                  {p.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-off-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-off-white to-transparent" />
      </div>
    </section>
  );
}
