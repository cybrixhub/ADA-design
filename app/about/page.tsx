import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Anya Kovac",
    role: "Founder & Lead Designer",
    years: "12 years",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Matteo Ferri",
    role: "Head Woodworker",
    years: "20 years",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Clara Ashby",
    role: "Ceramics & Objects",
    years: "8 years",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80&auto=format&fit=crop&crop=face",
  },
];

const materials = [
  {
    name: "Reclaimed Oak",
    note: "Sourced from UK demolition yards",
    img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Stoneware",
    note: "Thrown in our Bermondsey studio",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Natural Stone",
    note: "Travertine, limestone, slate",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Linen & Wool",
    note: "Undyed, from UK mills",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80&auto=format&fit=crop",
  },
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
                We&apos;re a small studio of eight people who believe that how something is made matters as much as how it looks. We&apos;ve held that view for twelve years. We have no plans to change it.
              </p>
            </div>
          </div>

          {/* Full-bleed hero image */}
          <div className="mt-16 -mx-6 md:-mx-12 lg:-mx-20">
            <div className="h-[50vh] md:h-[70vh] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=85&auto=format&fit=crop"
                alt="Bermondsey Studio"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-bark/40" />
              <div className="absolute bottom-8 left-6 md:left-12 lg:left-20">
                <p className="label-text text-sand/60">Bermondsey Studio, London · 2026</p>
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
                The studio has grown slowly, deliberately. We&apos;re eight people now. We turn down work when we&apos;d have to compromise to take it. We have a backlog of six months because we won&apos;t hire to speed up. We think that&apos;s right.
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
          <div className="flex items-center gap-4 mb-12">
            <div className="w-5 h-px bg-stone/40" />
            <p className="label-text text-stone">What we work with</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {materials.map((mat) => (
              <div key={mat.name}>
                <div className="aspect-square mb-5 relative overflow-hidden">
                  <Image
                    src={mat.img}
                    alt={mat.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
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
                  className={`flex gap-8 py-8 ${i < timeline.length - 1 ? "border-b border-linen" : ""}`}
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
          <div className="flex items-center gap-4 mb-12">
            <div className="w-5 h-px bg-stone/40" />
            <p className="label-text text-stone">The people behind it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person) => (
              <div key={person.name}>
                <div className="aspect-[3/4] mb-6 relative overflow-hidden ring-1 ring-sand/20">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-4 right-4">
                    <span className="label-text text-off-white/80 bg-bark/50 px-2 py-1 backdrop-blur-sm">{person.years}</span>
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
            Come and see how it&apos;s made.
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
