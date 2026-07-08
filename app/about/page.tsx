import Link from "next/link";
import { ArrowRight } from "lucide-react";

const team = [
  { name: "Anya Kovac", role: "Founder & Lead Designer", years: "12 years" },
  { name: "Matteo Ferri", role: "Head Woodworker", years: "20 years" },
  { name: "Clara Ashby", role: "Ceramics & Objects", years: "8 years" },
];

const timeline = [
  { year: "2014", event: "Founded in a rented workshop in East London." },
  { year: "2016", event: "First commissioned piece — a walnut dining table for a Hackney home." },
  { year: "2019", event: "Moved to our current studio in Bermondsey. Added the ceramics kiln." },
  { year: "2022", event: "Began sourcing reclaimed timber from demolition yards across the UK." },
  { year: "2026", event: "Over 400 pieces in homes across Europe. Still eight people." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="pt-36 pb-0 md:pt-48 bg-bark overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end pb-0">
            <div>
              <p className="label-text text-sand/40 mb-6">Who we are</p>
              <h1 className="font-serif text-display-lg text-off-white leading-none">
                Made in<br />
                <em className="text-terracotta">London.</em><br />
                Kept forever.
              </h1>
            </div>
            <div className="pb-8 md:pb-16">
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-sm">
                We're a small studio of eight people who believe that how something is made matters as much as how it looks. We've held that view for twelve years. We have no plans to change it.
              </p>
            </div>
          </div>

          {/* Full-bleed image placeholder */}
          <div className="mt-16 -mx-6 md:-mx-12 lg:-mx-20">
            <div className="bg-[#4A3728] h-[50vh] md:h-[70vh] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bark/80 to-transparent" />
              <div className="absolute bottom-8 left-6 md:left-12 lg:left-20">
                <p className="label-text text-sand/40">Bermondsey Studio, London · 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <p className="label-text text-stone mb-6">The story</p>
              <div className="md:sticky md:top-32">
                <h2 className="font-serif text-display-md text-bark">
                  Built on<br />
                  <em className="text-terracotta">conviction</em>
                </h2>
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-6 space-y-8 text-stone font-light text-lg leading-relaxed">
              <p>
                Forma started in 2014 with a rented workbench, a secondhand table saw, and a conviction that the world had too much furniture made to be replaced. We set out to make the opposite — objects that get better as they age, that carry the marks of use rather than hiding from them.
              </p>
              <p>
                We still work by hand. We use reclaimed timber from demolition yards across the UK, stone sourced from quarries we visit ourselves, and ceramics thrown in our own Bermondsey studio. Every piece is made to order. Nothing is mass-produced. We know who made each thing we send into the world.
              </p>
              <p>
                The studio has grown slowly, deliberately. We're eight people now. We turn down work when we'd have to compromise to take it. We have a backlog of six months because we won't hire to speed up. We think that's right.
              </p>
              <p className="font-serif text-2xl text-bark italic">
                "Fast furniture is a contradiction. The things worth having take time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MATERIALS ── */}
      <section className="section-pad bg-linen">
        <div className="container-wide">
          <p className="label-text text-stone mb-12">What we work with</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Reclaimed Oak", note: "Sourced from UK demolition yards", color: "bg-[#8C7B6B]" },
              { name: "Stoneware", note: "Thrown in our Bermondsey studio", color: "bg-[#B8A898]" },
              { name: "Natural Stone", note: "Travertine, limestone, slate", color: "bg-[#9E9086]" },
              { name: "Linen & Wool", note: "Undyed, from UK mills", color: "bg-sand" },
            ].map((mat) => (
              <div key={mat.name}>
                <div className={`${mat.color} aspect-square mb-5`} />
                <h3 className="font-serif text-2xl text-bark mb-1">{mat.name}</h3>
                <p className="label-text text-stone">{mat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="label-text text-stone mb-6">Twelve years in</p>
              <h2 className="font-serif text-display-md text-bark">
                How we<br />
                <em className="text-terracotta">got here</em>
              </h2>
            </div>

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex gap-8 py-8 ${
                    i < timeline.length - 1 ? "border-b border-linen" : ""
                  }`}
                >
                  <p className="font-serif text-2xl text-stone shrink-0 w-16">{item.year}</p>
                  <p className="text-bark font-light leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <p className="label-text text-stone mb-12">The people behind it</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person) => (
              <div key={person.name}>
                <div className="bg-[#8C7B6B] aspect-[3/4] mb-6 relative overflow-hidden">
                  <div className="absolute bottom-4 right-4">
                    <span className="label-text text-off-white/60">{person.years}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-bark">{person.name}</h3>
                <p className="label-text text-stone mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-terracotta">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-4xl md:text-5xl text-off-white max-w-md [text-wrap:balance]">
            Come and see how it's made.
          </h2>
          <div className="flex flex-col gap-4">
            <Link href="/contact" className="btn-primary bg-bark border-0">
              Visit the studio <ArrowRight size={14} />
            </Link>
            <Link href="/collections" className="label-text text-off-white/60 hover:text-off-white transition-colors text-center">
              Browse collections instead →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
