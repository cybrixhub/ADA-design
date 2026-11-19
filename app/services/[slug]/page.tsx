import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services, getService } from "@/lib/services";
import { absoluteUrl, pageOpenGraph, DEFAULT_OG_IMAGE } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

// Only the services defined in lib/services.ts exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const title = `${service.metaTitle} — ADA Design`;
  const url = absoluteUrl(`/services/${service.slug}`);
  return {
    title,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: pageOpenGraph(`/services/${service.slug}`, title, service.metaDescription),
    twitter: {
      card: "summary_large_image",
      title,
      description: service.metaDescription,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <main className="min-h-screen bg-off-white">

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-bark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta opacity-10 blur-3xl" />
        </div>
        <div className="container-wide relative">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 label-text text-sand/50">
              <li>
                <Link href="/" className="hover:text-off-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-off-white transition-colors">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-sand/80" aria-current="page">{service.code}</li>
            </ol>
          </nav>
          <p className="label-text text-terracotta mb-6">{service.title}</p>
          <h1 className="font-serif text-display-xl text-off-white [text-wrap:balance] max-w-2xl mb-8">
            {service.heading[0]}<br />
            <em className="text-terracotta not-italic">{service.heading[1]}</em>
          </h1>
          <p className="text-white/60 font-light text-lg leading-relaxed max-w-xl mb-10">
            {service.intro}
          </p>
          <Link href="/contact" className="btn-primary bg-terracotta hover:bg-off-white hover:text-bark">
            Enquire about this service <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <p className="label-text text-stone mb-6">Overview</p>
              <h2 className="font-serif text-display-md text-bark [text-wrap:balance]">
                What this<br />
                <em className="text-terracotta">service covers</em>
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-stone font-light text-lg leading-relaxed">
              {service.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SCOPE + SUITED TO ── */}
      <section className="section-pad bg-bark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-terracotta/10 blur-3xl pointer-events-none" />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <p className="label-text text-sand/50 mb-6">
                {service.slug === "consultant-coordination" ? "Who we coordinate" : "What we handle"}
              </p>
              <h2 className="font-serif text-display-md text-off-white [text-wrap:balance] mb-8">
                Handled by ADA,<br />
                <em className="text-terracotta">start to finish.</em>
              </h2>
              <div className="grid grid-cols-1 gap-px bg-white/10">
                {service.scope.map((item) => (
                  <div key={item} className="bg-bark px-6 py-4 border border-white/10">
                    <p className="text-off-white/80 font-light text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="label-text text-sand/50 mb-6">Common project types</p>
              <ul className="border-t border-white/10">
                {service.suitedTo.map((type) => (
                  <li key={type} className="border-b border-white/10 py-4">
                    <p className="font-serif text-lg md:text-xl text-off-white/90">{type}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 label-text text-off-white/60 hover:text-off-white transition-colors mt-8"
              >
                Browse our projects <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <p className="label-text text-stone mb-6">How it works</p>
          <h2 className="font-serif text-display-md text-bark mb-12 [text-wrap:balance]">
            Our process,<br />
            <em className="text-terracotta">step by step.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-sand/25">
            {service.process.map((p, i) => (
              <div key={p.step} className="border-r border-b border-sand/25 p-8">
                <p className="label-text text-sand text-[0.6rem] mb-6">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-serif text-xl text-bark mb-4">{p.step}</h3>
                <p className="text-stone font-light leading-relaxed text-sm">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      {related.length > 0 && (
        <section className="section-pad bg-off-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="label-text text-stone mb-6">Related services</p>
                <h2 className="font-serif text-display-md text-bark [text-wrap:balance]">
                  Often paired<br />
                  <em className="text-terracotta">with this service</em>
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 label-text text-stone hover:text-bark transition-colors"
              >
                <ArrowLeft size={12} /> All services
              </Link>
            </div>
            <div className="border-t border-sand/25">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex items-center justify-between gap-6 border-b border-sand/25 py-5 md:py-6 hover:bg-cream/40 transition-colors duration-300 -mx-6 md:-mx-8 px-6 md:px-8"
                >
                  <div className="flex items-center gap-6 md:gap-8 min-w-0">
                    <p className="label-text text-terracotta text-[0.6rem] shrink-0 w-14">{r.code}</p>
                    <h3 className="font-serif text-xl md:text-2xl text-bark leading-tight">{r.title}</h3>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-terracotta shrink-0 md:opacity-0 md:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="section-pad bg-bark text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <p className="label-text text-sand/50 mb-6">Ready to start?</p>
          <h2 className="font-serif text-display-lg text-off-white mb-6 [text-wrap:balance]">
            Talk to us about<br />
            <em className="text-terracotta">your project.</em>
          </h2>
          <p className="text-white/50 font-light leading-relaxed mb-8">
            Tell us about your site and what you are planning. We will let you know how ADA Design can help and what the next step looks like.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-terracotta hover:bg-off-white hover:text-bark">
              Start an enquiry <ArrowRight size={14} />
            </Link>
            <a
              href="tel:0431231255"
              className="label-text text-off-white/60 hover:text-off-white transition-colors"
            >
              Or call 0431 231 255
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
