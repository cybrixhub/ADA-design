import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import FloatingLeaves from "@/components/FloatingLeaves";
import AnimatedTree from "@/components/AnimatedTree";
import { projects } from "@/lib/projects";

const FEATURED_SLUGS = [
  "44-kidd-circuit-goulburn-nsw-2580",
  "12-dexter-road-lochinvar-nsw-2321",
  "1-bandon-road-vineyard-nsw",
];

const featured = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
  (p): p is (typeof projects)[number] => Boolean(p)
);

const heroImage =
  projects.find((p) => p.slug === "44-kidd-circuit-goulburn-nsw-2580")?.images[0] ??
  projects[0].images[0];

const values = [
  {
    num: "01",
    title: "Site-first design",
    body: "Every project starts from the land — orientation, aspect, view lines. The building follows the site.",
  },
  {
    num: "02",
    title: "Purpose over pattern",
    body: "We don't repeat a house type. A dual occupancy, a medical centre, and a rural home each ask for their own logic.",
  },
  {
    num: "03",
    title: "Documented properly",
    body: "Renders, plans, and specifications delivered to a level that removes doubt from build and approval.",
  },
];

const categoryShowcase = [
  "Single Storey Dwelling",
  "Double Storey Dwelling",
  "Dual Occupancy",
  "Dwelling with Granny Flat",
  "Secondary Dwelling & Studio",
  "Medical Centre",
  "Industrial / Sheds",
  "Rural House",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-bark flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-terracotta opacity-20 blur-3xl" />
        </div>

        {/* Falling leaves */}
        <FloatingLeaves count={26} className="z-[2]" />

        {/* Trees */}
        <AnimatedTree
          className="absolute bottom-0 -left-14 md:-left-8 w-[360px] md:w-[560px] h-[600px] md:h-[820px] z-[1]"
          color="text-[#C9B99A]"
          opacity={0.32}
        />
        <div className="absolute bottom-0 -right-16 md:-right-6 w-[240px] md:w-[380px] h-[440px] md:h-[620px] z-[1]">
          <AnimatedTree color="text-[#C4704F]" opacity={0.22} />
        </div>

        {/* Hero render */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden">
          <Image
            src={heroImage}
            alt="Featured project"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-bark/55" />
          <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-px w-full bg-white/[0.04]" />
            ))}
          </div>
          <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16 z-10 space-y-2">
            <div className="w-24 h-px bg-sand opacity-40" />
            <p className="label-text text-sand/50">Selected project — Goulburn, NSW</p>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative container-wide pb-20 md:pb-28 pt-32 md:pt-0 z-10">
          <div className="max-w-2xl">
            <AnimatedFadeIn delay={1.9}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-5 h-px bg-sand/30" />
                <p className="label-text text-sand/60">Architectural Design · NSW</p>
              </div>
            </AnimatedFadeIn>
            <AnimatedHeading as="h1" delay={2.0} className="font-serif text-display-xl text-off-white mb-10 [text-wrap:balance]">
              Purpose-built<br />
              <em className="not-italic text-terracotta">for</em><br />
              its site.
            </AnimatedHeading>
            <AnimatedFadeIn delay={2.3}>
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-sm mb-12">
                {projects.length} projects across NSW — residential dwellings, medical facilities, and industrial developments. Each one designed for its land, its use, and the people it holds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects" className="btn-primary group">
                  View projects
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="btn-outline border-white/30 text-white/70 hover:bg-white hover:text-bark">
                  The studio
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

      {/* ── STATS BAND ── */}
      <section className="bg-terracotta py-8">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-off-white">
            {[
              { num: projects.length, label: "Projects" },
              { num: 9, label: "Building types" },
              { num: "NSW", label: "Region" },
              { num: "2026", label: "Studio" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl leading-none mb-2">{s.num}</p>
                <p className="label-text text-off-white/70 text-[0.6rem]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-14">
            <div>
              <AnimatedFadeIn>
                <p className="label-text text-stone mb-4">Selected work</p>
              </AnimatedFadeIn>
              <AnimatedHeading className="font-serif text-display-md text-bark">
                Recent<br />
                <em className="text-stone">projects</em>
              </AnimatedHeading>
            </div>
            <AnimatedFadeIn>
              <Link
                href="/projects"
                className="hidden md:flex items-center gap-2 label-text text-terracotta hover:gap-4 transition-all"
              >
                All {projects.length} projects <ArrowRight size={12} />
              </Link>
            </AnimatedFadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-sand/25">
            {featured.map((item, i) => (
              <AnimatedFadeIn key={item.slug} delay={i * 0.1}>
                <Link
                  href={`/projects/${item.slug}`}
                  className="group cursor-pointer border-r border-b border-sand/25 p-6 md:p-8 flex flex-col h-full bg-cream hover:bg-off-white/60 transition-colors duration-500"
                >
                  <div className="flex items-center justify-between mb-6">
                    <p className="label-text text-sand text-[0.65rem]">
                      {String(i + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
                    </p>
                    <span className="label-text text-terracotta text-[0.65rem]">
                      · {item.category}
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] w-full overflow-hidden ring-1 ring-transparent group-hover:ring-sand/50 transition-all duration-500 bg-linen">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/15 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-off-white text-bark p-3">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-auto">
                    <div className="flex items-center gap-1.5 mb-2">
                      <MapPin size={11} className="text-terracotta shrink-0" />
                      <p className="label-text text-stone truncate">{item.address}</p>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-bark leading-tight [text-wrap:balance]">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </AnimatedFadeIn>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link href="/projects" className="btn-outline w-full justify-center">
              All {projects.length} projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORY SHOWCASE ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16">
            <div className="md:col-span-5">
              <AnimatedFadeIn>
                <p className="label-text text-stone mb-6">What we design</p>
              </AnimatedFadeIn>
              <AnimatedHeading className="font-serif text-display-md text-bark [text-wrap:balance]">
                Nine building<br />
                <em className="text-terracotta">types</em><br />
                one method.
              </AnimatedHeading>
            </div>
            <div className="md:col-span-6 md:col-start-7 pt-4">
              <p className="text-stone font-light text-lg leading-relaxed">
                From a single-storey home in a suburban lot to a medical clinic on an arterial road — the categories differ, but the approach doesn&apos;t. Read the land. Read the brief. Draw only what earns its place.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-sand/25">
            {categoryShowcase.map((cat, i) => {
              const count = projects.filter((p) => p.category === cat).length;
              return (
                <Link
                  key={cat}
                  href="/projects"
                  className="group border-r border-b border-sand/25 p-6 md:p-8 hover:bg-cream/40 transition-colors duration-500 flex flex-col"
                >
                  <p className="label-text text-sand text-[0.6rem] mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-bark leading-tight mb-3 [text-wrap:balance]">
                    {cat}
                  </h3>
                  <p className="label-text text-stone mt-auto">
                    {count} {count === 1 ? "project" : "projects"}
                  </p>
                  <ArrowRight
                    size={14}
                    className="text-terracotta mt-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section className="py-20 md:py-32 bg-linen border-y border-sand/40 relative overflow-hidden">
        <FloatingLeaves count={10} color="text-terracotta" className="opacity-70" />

        <div
          className="absolute right-0 top-0 h-full w-64 md:w-80 pointer-events-none opacity-[0.22] text-stone overflow-hidden"
          style={{ animation: "branchSway 9s ease-in-out infinite", transformOrigin: "100% 100%" }}
        >
          <svg viewBox="0 0 280 500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M280 500 Q265 460 255 420 Q245 380 238 340 Q231 300 228 260 Q225 220 226 180 Q227 140 232 100 Q237 60 244 20" strokeWidth="1.2"/>
            <path d="M238 340 Q210 322 184 308 Q158 294 136 276 Q114 258 98 236" strokeWidth="0.9"/>
            <path d="M228 260 Q202 246 176 232 Q150 218 128 200 Q106 182 92 160" strokeWidth="0.9"/>
            <path d="M226 180 Q202 168 178 156 Q154 144 134 128 Q114 112 104 90" strokeWidth="0.85"/>
            <path d="M232 100 Q210 92 188 82 Q166 72 148 58 Q130 44 122 24" strokeWidth="0.8"/>
          </svg>
        </div>
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
                &ldquo;Architecture that argues<br />
                <span className="text-terracotta italic">with its site</span><br />
                loses every time.&rdquo;
              </AnimatedHeading>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-pad bg-off-white relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-48 md:w-72 h-64 md:h-96 pointer-events-none opacity-[0.14] text-bark"
          style={{ animation: "branchSway 10s ease-in-out infinite", transformOrigin: "100% 0%" }}
        >
          <svg viewBox="0 0 240 360" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M220 0 Q180 40 160 80 Q140 120 130 165 Q120 210 122 255 Q124 300 130 345" strokeWidth="1.3"/>
            <path d="M160 80 Q130 70 104 66 Q78 62 56 64 Q34 66 16 76" strokeWidth="0.9"/>
            <path d="M130 165 Q104 162 80 164 Q56 166 36 174 Q16 182 4 196" strokeWidth="0.85"/>
            <path d="M122 255 Q100 258 78 266 Q56 274 38 288 Q20 302 10 320" strokeWidth="0.8"/>
            <path d="M160 80 Q186 68 208 52 Q230 36 238 12" strokeWidth="0.9"/>
            <path d="M130 165 Q154 154 176 138 Q198 122 210 100" strokeWidth="0.85"/>
          </svg>
        </div>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-start">
            <div>
              <AnimatedFadeIn>
                <p className="label-text text-stone mb-8">How we work</p>
              </AnimatedFadeIn>
              <AnimatedHeading className="font-serif text-display-md text-bark mb-8 [text-wrap:balance]">
                A method,<br />
                <em className="text-terracotta">not a style.</em>
              </AnimatedHeading>
              <p className="text-stone font-light text-lg leading-relaxed max-w-md">
                We don&apos;t bring a house type to the site. We bring a way of listening — to the block, the sun, the brief, the budget — and then we draw.
              </p>
            </div>

            <div>
              <div className="space-y-0">
                {values.map((v, i) => (
                  <AnimatedFadeIn key={v.num} delay={i * 0.1}>
                    <div className="flex gap-8 border-t border-sand/20 py-8">
                      <p className="label-text text-sand pt-1 shrink-0">{v.num}</p>
                      <div>
                        <h3 className="font-serif text-2xl text-bark mb-3">{v.title}</h3>
                        <p className="text-stone leading-relaxed font-light">{v.body}</p>
                      </div>
                    </div>
                  </AnimatedFadeIn>
                ))}
              </div>

              <AnimatedFadeIn delay={0.3} className="mt-8">
                <Link href="/about" className="btn-outline group">
                  About the studio
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA CLOSER ── */}
      <section className="section-pad bg-bark relative overflow-hidden">
        <FloatingLeaves count={14} color="text-terracotta" className="opacity-60" />

        <div
          className="absolute bottom-0 right-0 w-56 md:w-80 h-64 md:h-96 pointer-events-none opacity-[0.18] text-sand overflow-hidden"
          style={{ animation: "branchSway 11s ease-in-out infinite", transformOrigin: "100% 100%" }}
        >
          <svg viewBox="0 0 280 320" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M280 320 Q260 295 248 270 Q236 245 228 218 Q220 191 218 164 Q216 137 220 110 Q224 83 232 56 Q240 29 248 4" strokeWidth="1.3"/>
            <path d="M228 218 Q200 202 174 190 Q148 178 126 160 Q104 142 90 118" strokeWidth="0.9"/>
            <path d="M218 164 Q192 152 168 140 Q144 128 124 112 Q104 96 94 74" strokeWidth="0.85"/>
            <path d="M220 110 Q196 100 174 90 Q152 80 134 64 Q116 48 110 26" strokeWidth="0.8"/>
          </svg>
        </div>
        <div className="container-wide text-center">
          <AnimatedFadeIn>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-10 h-px bg-sand/20" />
              <p className="label-text text-sand/40">Start a project</p>
              <div className="w-10 h-px bg-sand/20" />
            </div>
          </AnimatedFadeIn>
          <AnimatedHeading className="font-serif text-display-lg text-off-white mb-10 [text-wrap:balance]">
            Every site<br />
            <em className="text-terracotta">has</em> a right<br />
            answer.
          </AnimatedHeading>
          <AnimatedFadeIn delay={0.2}>
            <p className="text-white/40 text-lg font-light max-w-md mx-auto mb-12 leading-relaxed">
              Send us the block and the brief. We&apos;ll come back with a direction.
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
