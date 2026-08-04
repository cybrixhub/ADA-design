import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

const services = [
  {
    name: "Concept & Design",
    note: "Site analysis, massing, sun and wind, floor plans, form.",
  },
  {
    name: "3D Rendering",
    note: "Photorealistic exterior and interior renders for approvals and marketing.",
  },
  {
    name: "Documentation",
    note: "DA, CC, and construction sets — drawn to build cleanly.",
  },
  {
    name: "Council Liaison",
    note: "Compliance strategy across NSW councils. LEP, DCP, BCA.",
  },
];

const buildingTypes = [
  "Single Storey Dwelling",
  "Double Storey Dwelling",
  "Dual Occupancy",
  "Dwelling with Granny Flat",
  "Secondary Dwelling & Studio",
  "Rural House",
  "Multidwelling (Townhouses)",
  "Medical Centre",
  "Industrial / Sheds",
];

const timeline = [
  { year: "Concept", event: "Site visit, brief, and a first sketch of the massing." },
  { year: "Schematic", event: "Floor plans and elevations. Options tested against light, cost, and code." },
  { year: "Render", event: "Photorealistic 3D views. Materials selected, form resolved." },
  { year: "Approval", event: "DA lodged with the council. We manage RFIs through to consent." },
  { year: "Construction", event: "Documentation, tender support, and inspection through build." },
];

const heroImage =
  projects.find((p) => p.slug === "12-dexter-road-lochinvar-nsw-2321")?.images[0] ??
  projects[0].images[0];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="pt-24 pb-0 md:pt-32 bg-bark overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-0">
            <div>
              <p className="label-text text-sand/40 mb-6">Who we are</p>
              <h1 className="font-serif text-display-lg text-off-white leading-none">
                A studio of<br />
                <em className="text-terracotta">architects</em><br />
                in NSW.
              </h1>
            </div>
            <div className="md:pt-10">
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-sm">
                ADA Design works across nine building types — from a single-storey home on a suburban lot to a medical clinic on a main road. Every project is drawn from its site, its brief, and the way a building actually gets built.
              </p>
            </div>
          </div>

          {/* Full-bleed hero */}
          <div className="mt-16 -mx-6 md:-mx-12 lg:-mx-20">
            <div className="h-[50vh] md:h-[70vh] relative overflow-hidden">
              <Image
                src={heroImage}
                alt="ADA Design project"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-bark/40" />
              <div className="absolute bottom-8 left-6 md:left-12 lg:left-20">
                <p className="label-text text-sand/60">Selected project · Lochinvar, NSW</p>
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
              <p className="label-text text-stone mb-6">The studio</p>
              <div className="md:sticky md:top-32">
                <h2 className="font-serif text-display-md text-bark">
                  Built to<br />
                  <em className="text-terracotta">the site</em>
                </h2>
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-6 space-y-8 text-stone font-light text-lg leading-relaxed">
              <p>
                ADA Design is an architectural design studio based in Sydney, working across metropolitan and regional New South Wales. Our practice covers the full spectrum of residential typology — single-storey homes, dual occupancies, granny flats, secondary dwellings — alongside medical centres, industrial developments, and townhouse projects.
              </p>
              <p>
                Every project starts with the land. Orientation, slope, view lines, existing vegetation, neighbouring buildings, council overlays — these decide the geometry before a single wall is drawn. When the site is read properly, the plan resolves itself.
              </p>
              <p>
                We handle design, 3D rendering, documentation, and council liaison in-house. That means one point of contact from the first sketch to the approved set — and no coordination gaps between the render and the drawings that get built.
              </p>
              <div className="border-l-2 border-terracotta pl-5 py-1">
                <p className="font-serif text-xl text-bark leading-relaxed font-light">
                  From engineering and town planning to BASIX and specialist consultants, we coordinate every discipline — providing one seamless point of contact from concept through approval.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-2 border-t border-sand/20">
                <Image
                  src="/ada-stamp.jpg"
                  alt="NSW Registered Architect stamp"
                  width={52}
                  height={52}
                  className="w-11 h-11 object-contain opacity-65 shrink-0"
                />
                <p className="label-text text-stone">NSW Registered Architect · Denis Nobel · Reg. No. 12432</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad bg-linen">
        <div className="container-wide">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-5 h-px bg-stone/40" />
            <p className="label-text text-stone">What we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-sand/25">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="border-r border-b border-sand/25 p-6 md:p-8 bg-linen hover:bg-cream/60 transition-colors duration-300"
              >
                <p className="label-text text-sand text-[0.6rem] mb-6">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl text-bark mb-4">{s.name}</h3>
                <p className="text-stone text-sm leading-relaxed font-light">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDING TYPES ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10">
            <div>
              <p className="label-text text-stone mb-6">Building types</p>
              <h2 className="font-serif text-display-md text-bark [text-wrap:balance]">
                Nine categories,<br />
                <em className="text-terracotta">one method</em>
              </h2>
            </div>
            <div className="pt-4">
              <p className="text-stone font-light text-lg leading-relaxed">
                We work across every residential typology allowed under NSW planning — plus commercial types where the brief calls for architectural clarity. Each type has its own rules; the method that reads them stays the same.
              </p>
            </div>
          </div>

          <div className="border-t border-sand/25">
            {buildingTypes.map((type, i) => (
              <Link
                key={type}
                href={`/projects?category=${encodeURIComponent(type)}`}
                className="group flex items-center justify-between border-b border-sand/25 py-4 md:py-6 hover:bg-cream/40 transition-colors duration-300 -mx-6 md:-mx-8 px-6 md:px-8"
              >
                <div className="flex items-center gap-8">
                  <p className="label-text text-sand text-[0.65rem] shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-bark leading-tight">{type}</h3>
                </div>
                <ArrowRight
                  size={16}
                  className="text-terracotta opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ── */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="label-text text-stone mb-6">The process</p>
              <h2 className="font-serif text-display-md text-bark">
                From site<br />
                <em className="text-terracotta">to signed off</em>
              </h2>
            </div>

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex gap-8 py-5 ${i < timeline.length - 1 ? "border-b border-linen" : ""}`}
                >
                  <p className="font-serif text-xl text-stone shrink-0 w-28">{item.year}</p>
                  <p className="text-bark font-light leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 bg-bark">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-2xl md:text-3xl text-off-white max-w-md [text-wrap:balance]">
            Have a site to design for?
          </h2>
          <div className="flex flex-col gap-4">
            <Link href="/contact" className="btn-primary bg-bark border-0">
              Start an enquiry <ArrowRight size={14} />
            </Link>
            <Link href="/projects" className="label-text text-off-white/60 hover:text-off-white transition-colors text-center">
              Browse projects instead →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
