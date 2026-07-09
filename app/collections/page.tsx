"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Living", "Dining", "Bedroom", "Lighting", "Objects"];

const products = [
  {
    id: 1, name: "Silo Dining Table", category: "Dining",
    material: "Reclaimed White Oak", price: "£3,200",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80&auto=format&fit=crop",
    size: "normal", tag: "Made to order",
  },
  {
    id: 2, name: "Basin Lounge Chair", category: "Living",
    material: "Walnut & Undyed Linen", price: "£1,840",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&auto=format&fit=crop",
    size: "tall", tag: "In stock",
  },
  {
    id: 3, name: "Vessel Floor Lamp", category: "Lighting",
    material: "Hand-thrown Stoneware", price: "£680",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80&auto=format&fit=crop",
    size: "normal", tag: null,
  },
  {
    id: 4, name: "Holt Bed Frame", category: "Bedroom",
    material: "Blackened Oak", price: "£2,400",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80&auto=format&fit=crop",
    size: "wide", tag: "Made to order",
  },
  {
    id: 5, name: "Cairn Bookshelf", category: "Living",
    material: "Solid Ash & Steel", price: "£1,960",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format&fit=crop",
    size: "tall", tag: "In stock",
  },
  {
    id: 6, name: "Shallow Bowl", category: "Objects",
    material: "White Stoneware", price: "£95",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&auto=format&fit=crop",
    size: "normal", tag: null,
  },
  {
    id: 7, name: "Dusk Side Table", category: "Living",
    material: "Travertine & Brass", price: "£740",
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80&auto=format&fit=crop",
    size: "normal", tag: "Limited",
  },
  {
    id: 8, name: "Terra Pendant Light", category: "Lighting",
    material: "Raku-fired Ceramic", price: "£420",
    img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80&auto=format&fit=crop",
    size: "normal", tag: null,
  },
  {
    id: 9, name: "Grove Coffee Table", category: "Living",
    material: "Reclaimed Elm", price: "£1,100",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop",
    size: "wide", tag: "In stock",
  },
];

export default function CollectionsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-24 bg-linen">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="label-text text-stone mb-6">What we make</p>
              <h1 className="font-serif text-display-lg text-bark">Collections</h1>
            </div>
            <p className="text-stone font-light text-lg max-w-xs leading-relaxed pb-2">
              Each piece is made to order or held in limited stock at our London studio.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="sticky top-16 md:top-20 z-30 bg-off-white/95 backdrop-blur border-b border-linen">
        <div className="container-wide">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
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
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-sand/25">
            {filtered.map((product, i) => (
              <article
                key={product.id}
                className="group cursor-pointer border-r border-b border-sand/25 p-6 md:p-8 flex flex-col bg-off-white hover:bg-cream/40 transition-colors duration-500"
              >
                {/* Editorial index */}
                <div className="flex items-center justify-between mb-6">
                  <p className="label-text text-sand text-[0.65rem]">
                    {String(i + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
                  </p>
                  {product.tag && (
                    <span className="label-text text-terracotta text-[0.65rem]">
                      · {product.tag}
                    </span>
                  )}
                </div>

                {/* Image — uniform portrait aspect */}
                <div className="relative aspect-[4/5] w-full overflow-hidden ring-1 ring-transparent group-hover:ring-sand/50 transition-all duration-500">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/15 transition-colors duration-500" />

                  {/* Quick look arrow */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-off-white text-bark p-3">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Meta — pushed to bottom for equal card heights */}
                <div className="pt-6 mt-auto flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <p className="label-text text-stone mb-2 truncate">
                      {product.category} · {product.material}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-bark leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <p className="font-serif text-lg md:text-xl text-stone shrink-0">
                    {product.price}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif text-3xl text-stone mb-4">Nothing here yet.</p>
              <button onClick={() => setActive("All")} className="label-text text-terracotta underline underline-offset-4">
                View all pieces
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── BESPOKE BANNER ── */}
      <section className="py-20 bg-bark">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="label-text text-sand/40 mb-4">Commission work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-off-white">
              Don&apos;t see what you need?
            </h2>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Talk to us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
