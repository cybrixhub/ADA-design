import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import FloatingLeaves from "@/components/FloatingLeaves";
import AnimatedTree from "@/components/AnimatedTree";
import MapSection from "@/components/MapSection";
import ProjectMarquee from "@/components/ProjectMarquee";
import HeroSlideshow, { type HeroSlide } from "@/components/HeroSlideshow";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import { projects } from "@/lib/projects";

const HERO_SLIDE_SLUGS = [
  "44-kidd-circuit-goulburn-nsw-2580",
  "12-dexter-road-lochinvar-nsw-2321",
  "1-bandon-road-vineyard-nsw",
  "10-mccormack-street-arndell-park-nsw-2148",
  "19-bayview-road-burraneer-nsw-2230",
];

function extractSuburb(address: string) {
  const parts = address.trim().split(/\s+/);
  const nswIdx = parts.findIndex((p) => p.toUpperCase() === "NSW");
  return nswIdx > 0 ? `${parts[nswIdx - 1]}, NSW` : address;
}

const heroSlides: HeroSlide[] = HERO_SLIDE_SLUGS.map((slug) =>
  projects.find((p) => p.slug === slug)
)
  .filter((p): p is (typeof projects)[number] => Boolean(p))
  .filter((p) => p.images.length > 0)
  .map((p) => ({
    src: p.images[0],
    alt: p.title,
    label: `Selected project — ${extractSuburb(p.address)}`,
  }));

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

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-bark flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-terracotta opacity-20 blur-3xl" />
        </div>

        {/* Falling leaves */}
        <FloatingLeaves count={10} className="z-[2]" />

        {/* Slideshow — full bleed, no dedicated tree column */}
        <div className="absolute inset-0 overflow-hidden">
          <HeroSlideshow slides={heroSlides} interval={5000} />
          {/* Corner blob — covers the tree + copy area so text stays readable */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 110% 100% at 0% 100%, rgba(47,32,24,0.95) 0%, rgba(47,32,24,0.75) 25%, rgba(47,32,24,0.4) 50%, rgba(47,32,24,0.1) 70%, transparent 85%)",
            }}
          />
        </div>

        {/* Tree — overlays slideshow, no background block */}
        <AnimatedTree
          className="absolute bottom-0 -left-10 md:-left-6 w-[280px] md:w-[380px] h-[520px] md:h-[760px] z-[2]"
          color="text-[#C9B99A]"
          opacity={0.45}
        />

        {/* Hero content */}
        <div className="relative container-wide pb-20 md:pb-28 pt-32 md:pt-0 z-10">
          <div className="max-w-2xl">
            <AnimatedFadeIn delay={1.9}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-5 h-px bg-sand/30" />
                <p className="label-text text-sand/60">Architectural Design · NSW</p>
              </div>
            </AnimatedFadeIn>
            <AnimatedHeading as="h1" delay={2.0} className="font-serif text-display-xl text-off-white mb-10 [text-wrap:balance] drop-shadow-[0_2px_20px_rgba(0,0,0,0.55)]">
              Purpose-built<br />
              <em className="not-italic text-terracotta">for</em><br />
              its site.
            </AnimatedHeading>
            <AnimatedFadeIn delay={2.3}>
              <p className="text-white/85 text-lg font-light leading-relaxed max-w-sm mb-12 drop-shadow-[0_1px_12px_rgba(0,0,0,0.7)]">
                Residential dwellings, medical facilities, and industrial developments across NSW. Each one designed for its land, its use, and the people it holds.
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

      {/* ── PROJECT MARQUEE ── */}
      <ProjectMarquee />

      {/* ── PROJECT MAP ── */}
      <MapSection />

      {/* ── FEATURED PROJECTS ── */}
      <FeaturedProjects />

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── PROCESS ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-10">
            <div className="md:col-span-5">
              <AnimatedFadeIn>
                <p className="label-text text-stone mb-6">How it works</p>
              </AnimatedFadeIn>
              <AnimatedHeading className="font-serif text-display-md text-bark [text-wrap:balance]">
                Three steps<br />
                <em className="text-terracotta">from brief</em><br />
                to approval.
              </AnimatedHeading>
            </div>
            <div className="md:col-span-6 md:col-start-7 pt-4">
              <p className="text-stone font-light text-lg leading-relaxed">
                Every project follows the same sequence. Site and brief analysis first — design and documentation follow. One contact handles it through to council sign-off.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-sand/25">
            {[
              {
                num: "01",
                title: "Brief & site",
                body: "Tell us the block, the orientation, and what you want to build. We visit the site and return with a first-pass massing concept.",
                note: "Week 1–2",
              },
              {
                num: "02",
                title: "Design & render",
                body: "Floor plans, elevations, and a photorealistic 3D render. Materials resolved, cost-tested against the brief, ready for council.",
                note: "Week 3–8",
              },
              {
                num: "03",
                title: "DA & approval",
                body: "We lodge the Development Application and manage all council RFIs through to consent. One point of contact from first sketch to signed-off drawings.",
                note: "Week 8+",
              },
            ].map((step, i) => (
              <AnimatedFadeIn key={step.num} delay={i * 0.1}>
                <div className="border-r border-b border-sand/25 p-6 md:p-8 flex flex-col h-full">
                  <p className="label-text text-sand text-[0.6rem] mb-4">{step.num}</p>
                  <h3 className="font-serif text-xl md:text-2xl text-bark mb-3">{step.title}</h3>
                  <p className="text-stone font-light text-sm leading-relaxed mb-6">{step.body}</p>
                  <p className="label-text text-terracotta mt-auto">{step.note}</p>
                </div>
              </AnimatedFadeIn>
            ))}
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
                    <div className="flex gap-8 border-t border-sand/20 py-5">
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
        <FloatingLeaves count={7} color="text-terracotta" className="opacity-60" />

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
            <div className="flex items-center justify-center gap-6 mb-5">
              <div className="w-10 h-px bg-sand/20" />
              <p className="label-text text-sand/40">Start a project</p>
              <div className="w-10 h-px bg-sand/20" />
            </div>
          </AnimatedFadeIn>
          <AnimatedHeading className="font-serif text-display-lg text-off-white mb-6 [text-wrap:balance]">
            Every site<br />
            <em className="text-terracotta">has</em> a right<br />
            answer.
          </AnimatedHeading>
          <AnimatedFadeIn delay={0.2}>
            <p className="text-white/40 text-lg font-light max-w-md mx-auto mb-7 leading-relaxed">
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
