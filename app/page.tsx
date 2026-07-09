import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedFadeIn from "@/components/AnimatedFadeIn";

const featured = [
  {
    id: 1,
    name: "Silo Dining Table",
    category: "Dining",
    material: "Reclaimed Oak",
    price: "£3,200",
    color: "bg-[#8C7B6B]",
    size: "col-span-2",
  },
  {
    id: 2,
    name: "Basin Lounge Chair",
    category: "Living",
    material: "Walnut & Linen",
    price: "£1,840",
    color: "bg-[#A89B8C]",
    size: "col-span-1",
  },
  {
    id: 3,
    name: "Vessel Floor Lamp",
    category: "Lighting",
    material: "Hand-thrown Ceramic",
    price: "£680",
    color: "bg-sand",
    size: "col-span-1",
  },
];

const values = [
  {
    num: "01",
    title: "Materials first",
    body: "We source reclaimed oak, hand-quarried stone, and natural linen from suppliers we know by name.",
  },
  {
    num: "02",
    title: "Made to outlast trends",
    body: "We design for the decade, not the season. Our pieces are made to grow with you, not be replaced by you.",
  },
  {
    num: "03",
    title: "The mark of the hand",
    body: "Every joint, every finish, every imperfection is part of the object. We don't sand away the story.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-bark flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3A2A1E] opacity-60" />
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-terracotta opacity-20 blur-3xl" />
        </div>

        {/* Image placeholder */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#4A3728]">
          <div className="w-full h-full bg-gradient-to-bl from-[#5C4436] via-[#3D2E22] to-[#2F2018] flex items-end justify-start p-8 md:p-16 relative overflow-hidden">
            {/* Watermark numeral */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="font-serif text-[45vw] md:text-[28vw] text-white/[0.04] font-light leading-none tracking-tighter">I</span>
            </span>
            {/* Subtle horizontal rules */}
            <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-px w-full bg-white/[0.04]" />
              ))}
            </div>
            <div className="relative space-y-2 z-10">
              <div className="w-24 h-px bg-sand opacity-40" />
              <p className="label-text text-sand/50">Silo Collection — 2026</p>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative container-wide pb-20 md:pb-28 pt-32 md:pt-0 z-10">
          <div className="max-w-2xl">
            <AnimatedFadeIn delay={1.9}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-5 h-px bg-sand/30" />
                <p className="label-text text-sand/60">Handcrafted Objects</p>
              </div>
            </AnimatedFadeIn>
            <AnimatedHeading as="h1" delay={2.0} className="font-serif text-display-xl text-off-white mb-10 [text-wrap:balance]">
              Made for<br />
              <em className="not-italic text-terracotta">how</em><br />
              you live.
            </AnimatedHeading>
            <AnimatedFadeIn delay={2.3}>
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-sm mb-12">
                Furniture built from reclaimed oak, stone, and hand-thrown ceramics. Pieces that age with you, not against you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/collections" className="btn-primary group">
                  Explore collections
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="btn-outline border-white/30 text-white/70 hover:bg-white hover:text-bark">
                  Our story
                </Link>
              </div>
            </AnimatedFadeIn>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 md:right-20 hidden md:flex flex-col items-center gap-3 text-white/30">
          <div className="h-12 w-px bg-gradient-to-b from-transparent to-white/30" />
          <p className="label-text rotate-90 origin-center text-white/30">Scroll</p>
        </div>
      </section>

      {/* ── MARQUEE BAND ── */}
      <section className="bg-terracotta py-5 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-12 text-off-white/90 font-serif text-xl font-light italic shrink-0">
              Reclaimed Oak
              <span className="text-off-white/30 not-italic font-sans text-label tracking-widest">✦</span>
              Hand-thrown Ceramic
              <span className="text-off-white/30 not-italic font-sans text-label tracking-widest">✦</span>
              Natural Stone
              <span className="text-off-white/30 not-italic font-sans text-label tracking-widest">✦</span>
              Linen & Wool
              <span className="text-off-white/30 not-italic font-sans text-label tracking-widest">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── MATERIALS STRIP ── */}
      <section className="flex overflow-hidden h-[160px] md:h-[200px]">
        {[
          { name: "Reclaimed Oak",       color: "bg-[#7A6854]" },
          { name: "Hand-Thrown Ceramic", color: "bg-[#C8A87A]" },
          { name: "Quarried Stone",      color: "bg-[#8C8278]" },
          { name: "Natural Linen",       color: "bg-[#C9B99A]" },
          { name: "Solid Walnut",        color: "bg-[#5C3D2E]" },
        ].map((mat, i) => (
          <div
            key={i}
            className={`${mat.color} flex-1 relative group flex items-end px-3 py-4 md:px-5 md:py-6 overflow-hidden`}
          >
            <p className="text-white/40 group-hover:text-white/80 transition-colors duration-500 font-sans text-[0.6rem] tracking-[0.22em] uppercase [writing-mode:vertical-rl] rotate-180">
              {mat.name}
            </p>
            <div className="absolute top-3 right-3 w-1 h-1 bg-white/20 group-hover:bg-white/50 transition-colors duration-500" />
          </div>
        ))}
      </section>

      {/* ── FEATURED PIECES ── */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-14">
            <div>
              <AnimatedFadeIn>
                <p className="label-text text-stone mb-4">Selected Works</p>
              </AnimatedFadeIn>
              <AnimatedHeading className="font-serif text-display-md text-bark">
                Current<br />
                <em className="text-stone">collection</em>
              </AnimatedHeading>
            </div>
            <AnimatedFadeIn>
              <Link
                href="/collections"
                className="hidden md:flex items-center gap-2 label-text text-terracotta hover:gap-4 transition-all"
              >
                View all <ArrowRight size={12} />
              </Link>
            </AnimatedFadeIn>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {featured.map((item, i) => (
              <AnimatedFadeIn key={item.id} delay={i * 0.1} className={item.size}>
                <div className="group relative cursor-pointer">
                  <div className={`${item.color} aspect-[4/5] w-full overflow-hidden transition-transform duration-700 group-hover:scale-[1.03] ring-1 ring-transparent group-hover:ring-sand/40 transition-shadow`}>
                    <div className="w-full h-full flex items-end p-6 md:p-8 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="mt-4 pb-5 flex items-start justify-between border-b border-sand/20">
                    <div>
                      <p className="label-text text-stone mb-1">{item.category} · {item.material}</p>
                      <h3 className="font-serif text-2xl text-bark">{item.name}</h3>
                    </div>
                    <p className="font-serif text-xl text-stone mt-1">{item.price}</p>
                  </div>
                </div>
              </AnimatedFadeIn>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link href="/collections" className="btn-outline w-full justify-center">
              View all collections <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="border-y border-sand/30 bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-sand/30">
            {[
              { num: "01", title: "Tell us about the space", body: "What you need, what you already have, and how you live in it." },
              { num: "02", title: "We propose the piece",    body: "Material samples, scale drawings, and a confirmed production timeline." },
              { num: "03", title: "Made by hand for you",   body: "12–16 weeks. One piece, made once, for your specific space." },
            ].map((step) => (
              <div key={step.num} className="py-12 px-0 md:px-12 first:md:pl-0 last:md:pr-0">
                <div className="w-8 h-px bg-sand/50 mb-5" />
                <p className="label-text text-sand mb-6">{step.num}</p>
                <h3 className="font-serif text-xl md:text-2xl text-bark mb-3">{step.title}</h3>
                <p className="text-stone text-sm leading-relaxed font-light">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATEMENT BREAK ── */}
      <section className="py-20 md:py-32 bg-linen border-y border-sand/40">
        <div className="container-wide">
          <div className="max-w-3xl">
            <AnimatedFadeIn>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-5 h-px bg-stone/40" />
                <p className="label-text text-stone">What we believe</p>
              </div>
            </AnimatedFadeIn>
            <div className="border-l-2 border-terracotta/40 pl-8 md:pl-12">
            <AnimatedHeading as="blockquote" className="font-serif text-display-md text-bark [text-wrap:balance]">
              "We don't chase trends.<br />
              <span className="text-terracotta italic">We make things</span><br />
              worth keeping."
            </AnimatedHeading>
            </div>
          </div>
          <div className="mt-16 md:mt-24 flex justify-end">
            <div className="grid grid-cols-3 gap-6 md:gap-16 max-w-2xl text-right">
              {[
                { num: "12+", label: "Years making" },
                { num: "400+", label: "Pieces made" },
                { num: "8", label: "Artisans" },
              ].map((stat, i) => (
                <AnimatedFadeIn key={stat.label} delay={i * 0.12}>
                  <p className="font-serif text-4xl md:text-5xl text-bark">{stat.num}</p>
                  <p className="label-text text-stone mt-2">{stat.label}</p>
                </AnimatedFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 items-center">
            <AnimatedFadeIn className="relative">
              <div className="bg-[#7A6854] aspect-[3/4] w-full max-w-md relative">
                <div className="absolute inset-4 border border-white/10 pointer-events-none" />
              </div>
              <div className="absolute inset-0 max-w-md border border-sand/25 translate-x-4 translate-y-4 pointer-events-none -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/20" />
              <div className="absolute top-8 -left-4">
                <p className="label-text text-stone [writing-mode:vertical-rl] tracking-[0.3em]">
                  Studio Visit — 2026
                </p>
              </div>
            </AnimatedFadeIn>

            <div>
              <AnimatedFadeIn>
                <p className="label-text text-stone mb-8">How we work</p>
              </AnimatedFadeIn>
              <AnimatedHeading className="font-serif text-display-md text-bark mb-14 [text-wrap:balance]">
                Craft as<br />
                <em className="text-terracotta">philosophy</em>
              </AnimatedHeading>

              <div className="space-y-10">
                {values.map((v, i) => (
                  <AnimatedFadeIn key={v.num} delay={i * 0.1}>
                    <div className="flex gap-8 border-t border-sand/20 pt-8">
                      <p className="label-text text-sand pt-1 shrink-0">{v.num}</p>
                      <div>
                        <h3 className="font-serif text-2xl text-bark mb-2">{v.title}</h3>
                        <p className="text-stone text-sm leading-relaxed font-light">{v.body}</p>
                      </div>
                    </div>
                  </AnimatedFadeIn>
                ))}
              </div>

              <AnimatedFadeIn delay={0.3} className="mt-14">
                <Link href="/about" className="btn-outline group">
                  Read our story
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA CLOSER ── */}
      <section className="section-pad bg-bark">
        <div className="container-wide text-center">
          <AnimatedFadeIn>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-10 h-px bg-sand/20" />
              <p className="label-text text-sand/40">Commission a piece</p>
              <div className="w-10 h-px bg-sand/20" />
            </div>
          </AnimatedFadeIn>
          <AnimatedHeading className="font-serif text-display-lg text-off-white mb-10 [text-wrap:balance]">
            Every home<br />
            <em className="text-terracotta">deserves</em> something<br />
            made for it.
          </AnimatedHeading>
          <AnimatedFadeIn delay={0.2}>
            <p className="text-white/40 text-lg font-light max-w-md mx-auto mb-12 leading-relaxed">
              Tell us about the space. We'll make something worth living with.
            </p>
            <Link href="/contact" className="btn-primary">
              Start an enquiry <ArrowRight size={14} />
            </Link>
          </AnimatedFadeIn>
        </div>
      </section>
    </>
  );
}
