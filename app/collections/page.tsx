"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Living", "Dining", "Bedroom", "Lighting", "Objects"];

const products = [
  {
    id: 1, name: "Silo Dining Table", category: "Dining",
    material: "Reclaimed White Oak", price: "£3,200",
    color: "bg-[#8C7B6B]", size: "normal",
    tag: "Made to order",
  },
  {
    id: 2, name: "Basin Lounge Chair", category: "Living",
    material: "Walnut & Undyed Linen", price: "£1,840",
    color: "bg-[#9B8E7F]", size: "tall",
    tag: "In stock",
  },
  {
    id: 3, name: "Vessel Floor Lamp", category: "Lighting",
    material: "Hand-thrown Stoneware", price: "£680",
    color: "bg-sand", size: "normal",
    tag: null,
  },
  {
    id: 4, name: "Holt Bed Frame", category: "Bedroom",
    material: "Blackened Oak", price: "£2,400",
    color: "bg-[#5C4A3A]", size: "wide",
    tag: "Made to order",
  },
  {
    id: 5, name: "Cairn Bookshelf", category: "Living",
    material: "Solid Ash & Steel", price: "£1,960",
    color: "bg-[#7A8C6E]", size: "tall",
    tag: "In stock",
  },
  {
    id: 6, name: "Shallow Bowl", category: "Objects",
    material: "White Stoneware", price: "£95",
    color: "bg-[#C9B99A]", size: "normal",
    tag: null,
  },
  {
    id: 7, name: "Dusk Side Table", category: "Living",
    material: "Travertine & Brass", price: "£740",
    color: "bg-[#B8A898]", size: "normal",
    tag: "Limited",
  },
  {
    id: 8, name: "Terra Pendant Light", category: "Lighting",
    material: "Raku-fired Ceramic", price: "£420",
    color: "bg-terracotta/70", size: "normal",
    tag: null,
  },
  {
    id: 9, name: "Grove Coffee Table", category: "Living",
    material: "Reclaimed Elm", price: "£1,100",
    color: "bg-[#6B5A4A]", size: "wide",
    tag: "In stock",
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
                className={`shrink-0 px-5 py-2 text-label tracking-[0.15em] uppercase transition-all duration-200 ${
                  active === cat
                    ? "bg-bark text-off-white"
                    : "text-stone hover:text-bark"
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
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8">
            {filtered.map((product) => (
              <div key={product.id} className="break-inside-avoid mb-6 md:mb-8 group cursor-pointer">
                {/* Image */}
                <div
                  className={`${product.color} overflow-hidden ${
                    product.size === "tall"
                      ? "aspect-[3/4]"
                      : product.size === "wide"
                      ? "aspect-[4/3]"
                      : "aspect-square"
                  } relative`}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/20 transition-colors duration-500" />

                  {/* Tag */}
                  {product.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="label-text text-off-white bg-bark/60 px-3 py-1.5 backdrop-blur-sm">
                        {product.tag}
                      </span>
                    </div>
                  )}

                  {/* Quick look arrow */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-off-white text-bark p-3">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="pt-4 flex items-start justify-between">
                  <div>
                    <p className="label-text text-stone mb-1.5">{product.category} · {product.material}</p>
                    <h3 className="font-serif text-xl md:text-2xl text-bark">{product.name}</h3>
                  </div>
                  <p className="font-serif text-xl text-stone mt-1 shrink-0 ml-4">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
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
              Don't see what you need?
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
