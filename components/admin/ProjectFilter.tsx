"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";
import DeleteButton from "./DeleteButton";

interface Props {
  projects: Project[];
  categories: string[];
  onDelete: (slug: string) => Promise<void>;
  onMoveUp: (slug: string) => Promise<void>;
  onMoveDown: (slug: string) => Promise<void>;
  onSeed: () => Promise<void>;
}

export default function ProjectFilter({
  projects,
  categories,
  onDelete,
  onMoveUp,
  onMoveDown,
  onSeed,
}: Props) {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return projects.filter((p) => {
      const matchesCat = activeCat === "All" || p.category === activeCat;
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [projects, search, activeCat]);

  return (
    <>
      {/* Toolbar */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div className="relative">
          <Search
            size={13}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none"
          />
          <input
            type="search"
            placeholder="Search projects…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 pr-3 py-2 text-xs border border-linen rounded-lg bg-white text-bark placeholder:text-stone/50 focus:border-bark outline-none w-52 transition-colors"
          />
        </div>

        <div className="flex items-center gap-1 flex-wrap">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
                activeCat === c
                  ? "bg-bark text-off-white"
                  : "text-stone hover:text-bark hover:bg-linen"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <span className="ml-auto text-xs text-stone shrink-0">
          {filtered.length}
          {filtered.length !== projects.length && ` / ${projects.length}`}
        </span>
      </div>

      {/* List */}
      <div className="bg-white rounded-lg border border-linen overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center">
            {projects.length === 0 ? (
              <>
                <p className="text-stone text-sm mb-4">No projects in the database yet.</p>
                <form action={onSeed}>
                  <button className="text-terracotta underline text-sm hover:no-underline transition-all">
                    Import from static data
                  </button>
                </form>
              </>
            ) : (
              <p className="text-stone text-sm">No projects match your filters.</p>
            )}
          </div>
        ) : (
          filtered.map((project) => {
            const realIdx = projects.findIndex((p) => p.slug === project.slug);
            return (
              <div
                key={project.slug}
                className="flex items-center gap-4 px-4 py-3 border-b border-linen last:border-0 hover:bg-gray-50 transition-colors group"
              >
                <div className="relative w-16 h-11 shrink-0 bg-linen rounded overflow-hidden">
                  {project.images[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone/30 text-xs">
                      No img
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-bark text-sm truncate">{project.title}</p>
                  <p className="text-xs text-stone truncate mt-0.5">
                    <span className="inline-block bg-sand/40 text-stone/70 px-1.5 py-0.5 rounded mr-1.5 text-[0.65rem]">
                      {project.category}
                    </span>
                    {project.address}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <form action={onMoveUp.bind(null, project.slug)}>
                    <button
                      disabled={realIdx === 0}
                      title="Move up"
                      className="p-1.5 text-stone hover:text-bark disabled:opacity-20 transition-colors text-sm leading-none"
                    >
                      ↑
                    </button>
                  </form>
                  <form action={onMoveDown.bind(null, project.slug)}>
                    <button
                      disabled={realIdx === projects.length - 1}
                      title="Move down"
                      className="p-1.5 text-stone hover:text-bark disabled:opacity-20 transition-colors text-sm leading-none"
                    >
                      ↓
                    </button>
                  </form>

                  <Link
                    href={`/projects/${project.slug}`}
                    target="_blank"
                    title="View on site"
                    className="p-1.5 text-stone/50 hover:text-bark transition-colors"
                  >
                    <ExternalLink size={13} />
                  </Link>

                  <Link
                    href={`/admin/projects/${project.slug}`}
                    className="ml-1 px-3 py-1.5 text-xs border border-sand text-stone rounded hover:bg-linen transition-colors"
                  >
                    Edit
                  </Link>

                  <DeleteButton
                    action={onDelete.bind(null, project.slug)}
                    confirm={`Delete "${project.title}"?`}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
