import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Services — ADA Design",
  description: "Comprehensive architectural design and complete project delivery across NSW — residential, medical, and industrial.",
  alternates: { canonical: absoluteUrl("/services") },
};

const designServices = [
  {
    code: "Design",
    title: "Architectural Design & Documentation",
    body: "Site-led concept design, floor plans and elevations, carried through to DA, CC and construction documentation drawn to build cleanly.",
    href: "/services/architectural-design",
  },
  {
    code: "3D",
    title: "3D Architectural Rendering",
    body: "Photorealistic exterior and interior renders for approvals and marketing, produced in-house alongside the design.",
    href: "/services/3d-rendering",
  },
];

const approvals = [
  {
    code: "DA",
    href: "/services/development-applications",
    title: "Development Applications",
    body: "We prepare and manage comprehensive DA submissions, working closely with local councils to secure consent for your unique architectural projects.",
  },
  {
    code: "CDC",
    href: "/services/complying-development-certificates",
    title: "Complying Development Certificates",
    body: "When your project fits within specific state development standards, we streamline the process to secure fast-tracked approvals through private certifiers.",
  },
  {
    code: "S4.55",
    href: "/services/section-4-55-modifications",
    title: "Section 4.55 Modifications",
    body: "If you need to make changes to an already approved DA, we handle the Sec 4.55 application to modify your existing development consent smoothly and legally.",
  },
  {
    code: "BIC",
    href: "/services/building-information-certificates",
    title: "Building Information Certificates",
    body: "Whether buying, selling, or regularising unauthorised building works, we guide you through the BIC process to ensure your property achieves compliance and peace of mind.",
  },
  {
    code: "BASIX",
    href: "/services/basix-certificates",
    title: "BASIX Certificates",
    body: "We seamlessly integrate sustainability into our designs, ensuring your project meets all NSW statutory requirements for water efficiency, energy efficiency, and thermal comfort.",
  },
];

const consultants = [
  "Land Surveyors",
  "Geotechnical Engineers",
  "Structural Engineers",
  "Stormwater & Civil Engineers",
  "Town Planners",
  "Private Certifiers",
  "Arborists",
  "Acoustic Consultants",
  "BASIX & Energy Assessors",
];

const advantages = [
  {
    title: "Single Point of Contact",
    body: "We streamline communication. You talk to ADA, and we talk to the engineers, councils, and certifiers.",
  },
  {
    title: "Risk Mitigation",
    body: "Our deep understanding of DAs, CDCs, BASIX, and local planning laws means we anticipate roadblocks before they cost you time and money.",
  },
  {
    title: "Cohesive Teamwork",
    body: "Because we regularly coordinate with the same top-tier consultants, your project benefits from a unified team that works together efficiently.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-off-white">

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-bark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta opacity-10 blur-3xl" />
        </div>
        <div className="container-wide relative">
          <p className="label-text text-sand/50 mb-6">What we offer</p>
          <h1 className="font-serif text-display-xl text-off-white [text-wrap:balance] max-w-2xl mb-8">
            Comprehensive Architecture &<br />
            <em className="text-terracotta not-italic">Seamless Project Delivery</em>
          </h1>
          <p className="text-white/60 font-light text-lg leading-relaxed max-w-xl">
            Visionary design. Expert execution. Stress-free approvals. From your first concept sketch to final council sign-off, ADA acts as the central hub for your entire project.
          </p>
        </div>
      </section>

      {/* ── DESIGN & VISUALISATION ── */}
      <section className="section-pad bg-off-white !pb-0">
        <div className="container-wide">
          <p className="label-text text-stone mb-6">Design &amp; visualisation</p>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-sand/25">
            {designServices.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group border-r border-b border-sand/25 p-8 flex flex-col gap-4 hover:bg-cream/60 transition-colors duration-300"
              >
                <span className="label-text text-terracotta text-[0.6rem]">{d.code}</span>
                <h3 className="font-serif text-xl text-bark">{d.title}</h3>
                <p className="text-stone font-light text-sm leading-relaxed flex-1">{d.body}</p>
                <span className="inline-flex items-center gap-2 label-text text-stone group-hover:text-terracotta transition-colors">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROVALS ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
            <div>
              <p className="label-text text-stone mb-6">Navigating approvals</p>
              <h2 className="font-serif text-display-md text-bark [text-wrap:balance]">
                Every approval,<br />
                <em className="text-terracotta">handled.</em>
              </h2>
            </div>
            <p className="text-stone font-light text-lg leading-relaxed self-end">
              Securing the right approvals can be the most daunting part of any building project. Our team is highly experienced in navigating local council regulations and state planning policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-sand/25">
            {approvals.map((a, i) => (
              <div key={a.code} className="border-r border-b border-sand/25 p-8 flex flex-col gap-4">
                <span className="label-text text-terracotta text-[0.6rem]">{a.code}</span>
                <h3 className="font-serif text-xl text-bark">{a.title}</h3>
                <p className="text-stone font-light text-sm leading-relaxed flex-1">{a.body}</p>
                <Link
                  href={a.href}
                  className="inline-flex items-center gap-2 label-text text-stone hover:text-terracotta transition-colors"
                  aria-label={`Learn more about ${a.title}`}
                >
                  Learn more <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTANT COORDINATION ── */}
      <section className="section-pad bg-bark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-terracotta/10 blur-3xl pointer-events-none" />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <p className="label-text text-sand/50 mb-6">Complete project delivery</p>
              <h2 className="font-serif text-display-md text-off-white [text-wrap:balance] mb-6">
                One lead.<br />
                <em className="text-terracotta">Every discipline.</em>
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                A successful build requires an entire ecosystem of experts working in harmony. You don't need to stress about finding and managing multiple contractors — ADA does it for you.
              </p>
              <Link
                href="/services/consultant-coordination"
                className="inline-flex items-center gap-2 label-text text-off-white/60 hover:text-off-white transition-colors mt-8"
              >
                How we coordinate consultants <ArrowRight size={12} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
              {consultants.map((c) => (
                <div key={c} className="bg-bark px-6 py-4 border border-white/10">
                  <p className="text-off-white/80 font-light text-sm">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ADA ADVANTAGE ── */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <p className="label-text text-stone mb-6">The ADA advantage</p>
          <h2 className="font-serif text-display-md text-bark mb-12 [text-wrap:balance]">
            Why choose ADA<br />
            <em className="text-terracotta">to lead your project?</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-sand/25">
            {advantages.map((a) => (
              <div key={a.title} className="border-r border-b border-sand/25 p-8">
                <h3 className="font-serif text-xl text-bark mb-4">{a.title}</h3>
                <p className="text-stone font-light leading-relaxed text-sm">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad bg-bark text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <p className="label-text text-sand/50 mb-6">Ready to start?</p>
          <h2 className="font-serif text-display-lg text-off-white mb-6 [text-wrap:balance]">
            Bring your<br />
            <em className="text-terracotta">vision to life.</em>
          </h2>
          <p className="text-white/50 font-light leading-relaxed mb-8">
            Whether starting from scratch, modifying an existing design, or navigating complex council approvals — ADA Design is here to lead the way.
          </p>
          <Link href="/contact" className="btn-primary">
            Start an enquiry <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </main>
  );
}
