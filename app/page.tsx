import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import FloatingLeaves from "@/components/FloatingLeaves";
import AnimatedTree from "@/components/AnimatedTree";

const featured = [
  {
    id: 1,
    name: "Silo Dining Table",
    category: "Dining",
    material: "Reclaimed Oak",
    price: "£3,200",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80&auto=format&fit=crop",
    size: "col-span-2",
  },
  {
    id: 2,
    name: "Basin Lounge Chair",
    category: "Living",
    material: "Walnut & Linen",
    price: "£1,840",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80&auto=format&fit=crop",
    size: "col-span-1",
  },
  {
    id: 3,
    name: "Vessel Floor Lamp",
    category: "Lighting",
    material: "Hand-thrown Ceramic",
    price: "£680",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&q=80&auto=format&fit=crop",
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
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-terracotta opacity-20 blur-3xl" />
        </div>

        {/* Falling leaves — realistic autumn drift */}
        <FloatingLeaves count={26} className="z-[2]" />

        {/* Main tree — realistic silhouette, left, warm sand against dark bark */}
        <AnimatedTree
          className="absolute bottom-0 -left-14 md:-left-8 w-[360px] md:w-[560px] h-[600px] md:h-[820px] z-[1]"
          color="text-[#C9B99A]"
          opacity={0.32}
        />
        {/* Companion tree — smaller, further right, terracotta */}
        <div className="absolute bottom-0 -right-16 md:-right-6 w-[240px] md:w-[380px] h-[440px] md:h-[620px] z-[1]">
          <AnimatedTree color="text-[#C4704F]" opacity={0.22} />
        </div>

        {/* Hero image */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=85&auto=format&fit=crop"
            alt="Silo Collection interior"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-bark/55" />
          {/* Subtle horizontal rules */}
          <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-px w-full bg-white/[0.04]" />
            ))}
          </div>
          <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16 z-10 space-y-2">
            <div className="w-24 h-px bg-sand opacity-40" />
            <p className="label-text text-sand/50">Silo Collection — 2026</p>
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
      <section className="flex overflow-hidden h-[220px] md:h-[300px]">
        {[
          {
            name: "Reclaimed Oak",
            img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80&auto=format&fit=crop",
            overlay: "bg-[#5C3D2E]/60",
          },
          {
            name: "Hand-Thrown Ceramic",
            img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80&auto=format&fit=crop",
            overlay: "bg-[#8C6A40]/55",
          },
          {
            name: "Quarried Stone",
            img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80&auto=format&fit=crop",
            overlay: "bg-[#6B6059]/60",
          },
          {
            name: "Natural Linen",
            img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80&auto=format&fit=crop",
            overlay: "bg-[#A89070]/50",
          },
          {
            name: "Solid Walnut",
            img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80&auto=format&fit=crop",
            overlay: "bg-[#3D2B1F]/65",
          },
        ].map((mat, i) => (
          <div
            key={i}
            className="flex-1 relative group flex items-end px-3 py-5 md:px-5 md:py-7 overflow-hidden cursor-pointer"
          >
            <Image
              src={mat.img}
              alt={mat.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="20vw"
            />
            <div className={`absolute inset-0 ${mat.overlay} transition-opacity duration-500 group-hover:opacity-40`} />
            <p className="relative z-10 text-white/50 group-hover:text-white/90 transition-colors duration-500 font-sans text-[0.6rem] tracking-[0.22em] uppercase [writing-mode:vertical-rl] rotate-180">
              {mat.name}
            </p>
            <div className="absolute top-4 right-3 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/70 transition-colors duration-500" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-sand/25">
            {featured.map((item, i) => (
              <AnimatedFadeIn key={item.id} delay={i * 0.1}>
                <article className="group cursor-pointer border-r border-b border-sand/25 p-6 md:p-8 flex flex-col h-full bg-cream hover:bg-off-white/60 transition-colors duration-500">
                  {/* Editorial index */}
                  <div className="flex items-center justify-between mb-6">
                    <p className="label-text text-sand text-[0.65rem]">
                      {String(i + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
                    </p>
                    <span className="label-text text-terracotta text-[0.65rem]">
                      · Featured
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden ring-1 ring-transparent group-hover:ring-sand/50 transition-all duration-500">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/15 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-off-white text-bark p-3">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="pt-6 mt-auto flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <p className="label-text text-stone mb-2 truncate">
                        {item.category} · {item.material}
                      </p>
                      <h3 className="font-serif text-xl md:text-2xl text-bark leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    <p className="font-serif text-lg md:text-xl text-stone shrink-0">
                      {item.price}
                    </p>
                  </div>
                </article>
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
      <section className="py-20 md:py-32 bg-linen border-y border-sand/40 relative overflow-hidden">
        {/* Drifting leaves overlay */}
        <FloatingLeaves count={10} color="text-terracotta" className="opacity-70" />

        {/* Fern / leaf spray — right, now sways */}
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
            <path d="M98 236 Q84 218 76 198 Q68 178 68 156" strokeWidth="0.7"/>
            <path d="M92 160 Q78 144 72 124 Q66 104 68 82" strokeWidth="0.7"/>
            <path d="M104 90 Q90 74 86 54 Q82 34 86 12" strokeWidth="0.65"/>
            <ellipse cx="68" cy="154" rx="9" ry="4" transform="rotate(35 68 154)" strokeWidth="0.6"/>
            <ellipse cx="58" cy="164" rx="7" ry="3.5" transform="rotate(48 58 164)" strokeWidth="0.6"/>
            <ellipse cx="68" cy="80" rx="9" ry="4" transform="rotate(32 68 80)" strokeWidth="0.6"/>
            <ellipse cx="58" cy="88" rx="7" ry="3" transform="rotate(44 58 88)" strokeWidth="0.6"/>
            <ellipse cx="86" cy="10" rx="8" ry="3.5" transform="rotate(28 86 10)" strokeWidth="0.6"/>
            <ellipse cx="76" cy="18" rx="7" ry="3" transform="rotate(40 76 18)" strokeWidth="0.6"/>
            <ellipse cx="122" cy="22" rx="8" ry="3.5" transform="rotate(22 122 22)" strokeWidth="0.6"/>
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
      <section className="section-pad bg-off-white relative overflow-hidden">
        {/* Single large leaf — upper right, gentle sway */}
        <div
          className="absolute top-0 right-0 w-48 md:w-72 h-64 md:h-96 pointer-events-none opacity-[0.14] text-bark"
          style={{ animation: "branchSway 10s ease-in-out infinite", transformOrigin: "100% 0%" }}
        >
          <svg viewBox="0 0 240 360" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M220 0 Q180 40 160 80 Q140 120 130 165 Q120 210 122 255 Q124 300 130 345 Q132 352 134 360" strokeWidth="1.3"/>
            <path d="M160 80 Q130 70 104 66 Q78 62 56 64 Q34 66 16 76" strokeWidth="0.9"/>
            <path d="M130 165 Q104 162 80 164 Q56 166 36 174 Q16 182 4 196" strokeWidth="0.85"/>
            <path d="M122 255 Q100 258 78 266 Q56 274 38 288 Q20 302 10 320" strokeWidth="0.8"/>
            <path d="M160 80 Q186 68 208 52 Q230 36 238 12" strokeWidth="0.9"/>
            <path d="M130 165 Q154 154 176 138 Q198 122 210 100" strokeWidth="0.85"/>
          </svg>
        </div>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 items-center">
            <AnimatedFadeIn className="relative">
              <div className="aspect-[3/4] w-full max-w-md relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop"
                  alt="Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
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
      <section className="section-pad bg-bark relative overflow-hidden">
        {/* Drifting leaves — dark background makes them glow */}
        <FloatingLeaves count={14} color="text-terracotta" className="opacity-60" />

        {/* Botanical corner — bottom right, sways */}
        <div
          className="absolute bottom-0 right-0 w-56 md:w-80 h-64 md:h-96 pointer-events-none opacity-[0.18] text-sand overflow-hidden"
          style={{ animation: "branchSway 11s ease-in-out infinite", transformOrigin: "100% 100%" }}
        >
          <svg viewBox="0 0 280 320" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M280 320 Q260 295 248 270 Q236 245 228 218 Q220 191 218 164 Q216 137 220 110 Q224 83 232 56 Q240 29 248 4" strokeWidth="1.3"/>
            <path d="M228 218 Q200 202 174 190 Q148 178 126 160 Q104 142 90 118" strokeWidth="0.9"/>
            <path d="M218 164 Q192 152 168 140 Q144 128 124 112 Q104 96 94 74" strokeWidth="0.85"/>
            <path d="M220 110 Q196 100 174 90 Q152 80 134 64 Q116 48 110 26" strokeWidth="0.8"/>
            <path d="M90 118 Q74 100 66 80 Q58 60 60 38" strokeWidth="0.7"/>
            <path d="M94 74 Q78 58 72 38 Q66 18 68 -2" strokeWidth="0.65"/>
            <ellipse cx="60" cy="36" rx="9" ry="4" transform="rotate(40 60 36)" strokeWidth="0.6"/>
            <ellipse cx="50" cy="44" rx="7" ry="3.5" transform="rotate(52 50 44)" strokeWidth="0.6"/>
            <ellipse cx="68" cy="-4" rx="8" ry="3.5" transform="rotate(35 68 -4)" strokeWidth="0.6"/>
            <ellipse cx="110" cy="24" rx="8" ry="3.5" transform="rotate(28 110 24)" strokeWidth="0.6"/>
            <ellipse cx="100" cy="32" rx="7" ry="3" transform="rotate(40 100 32)" strokeWidth="0.6"/>
            <ellipse cx="248" cy="2" rx="8" ry="3.5" transform="rotate(18 248 2)" strokeWidth="0.6"/>
          </svg>
        </div>
        {/* Botanical corner — top left, sways */}
        <div
          className="absolute top-0 left-0 w-44 md:w-60 h-48 md:h-72 pointer-events-none opacity-[0.16] text-sand overflow-hidden rotate-180"
          style={{ animation: "branchSway 13s ease-in-out infinite reverse", transformOrigin: "0% 100%" }}
        >
          <svg viewBox="0 0 240 280" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M120 280 Q118 250 122 220 Q126 190 132 162 Q138 134 146 108 Q154 82 162 58 Q170 34 176 10" strokeWidth="1.2"/>
            <path d="M132 162 Q158 150 182 138 Q206 126 224 108" strokeWidth="0.85"/>
            <path d="M146 108 Q168 98 190 86 Q212 74 228 56" strokeWidth="0.8"/>
            <path d="M122 220 Q100 208 80 192 Q60 176 46 155" strokeWidth="0.8"/>
            <path d="M224 106 Q234 88 234 70" strokeWidth="0.65"/>
            <ellipse cx="234" cy="68" rx="8" ry="3.5" transform="rotate(-35 234 68)" strokeWidth="0.6"/>
            <ellipse cx="228" cy="54" rx="7" ry="3" transform="rotate(-45 228 54)" strokeWidth="0.6"/>
          </svg>
        </div>
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
