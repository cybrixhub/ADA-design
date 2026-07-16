import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { formatAddress } from "@/lib/format-address";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — AD Design`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const hero = project.images[0];
  const rest = project.images.slice(1);

  return (
    <>
      {/* ── HEADER + HERO ── */}
      <section className="pt-20 md:pt-24 pb-0 bg-linen">
        <div className="container-wide">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 label-text text-stone hover:text-bark mb-6 group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            All projects
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            {/* Left — title block */}
            <div className="flex flex-col justify-between gap-8 md:py-4">
              <div>
                <p className="label-text text-terracotta mb-3">{project.category}</p>
                <h1 className="font-serif text-display-lg text-bark leading-tight [text-wrap:balance]">
                  {project.title}
                </h1>
              </div>
              <div>
                <p className="label-text text-stone mb-1">Location</p>
                <p className="text-bark font-light leading-snug">{formatAddress(project.address)}</p>
              </div>
            </div>

            {/* Right — hero image */}
            {hero && (
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image
                  src={hero}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      {project.description && (
        <section className="section-pad bg-off-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <p className="label-text text-stone mb-6">Project brief</p>
                <div className="md:sticky md:top-32">
                  <div className="w-10 h-px bg-terracotta mb-8" />
                  <p className="font-serif text-2xl text-bark italic leading-snug [text-wrap:balance]">
                    {project.category}<br />
                    <span className="not-italic text-stone">— NSW, Australia</span>
                  </p>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="font-serif text-xl md:text-2xl text-bark leading-relaxed font-light [text-wrap:pretty]">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ADDITIONAL RENDERS ── */}
      {rest.length > 0 && (
        <section className="pb-12 md:pb-16 bg-off-white">
          <div className="container-wide">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-5 h-px bg-stone/40" />
              <p className="label-text text-stone">
                {rest.length === 1 ? "Alternate view" : `${rest.length} more views`}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {rest.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden bg-linen ${
                    i === 0 && rest.length > 2 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} — view ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes={i === 0 && rest.length > 2 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROJECT NAV ── */}
      <section className="border-t border-sand/25 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col gap-3 p-8 md:p-12 border-r border-sand/25 hover:bg-off-white transition-colors"
            >
              <div className="flex items-center gap-2 label-text text-stone">
                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                Previous
              </div>
              <p className="font-serif text-xl md:text-2xl text-bark leading-tight">{prev.title}</p>
              <p className="label-text text-sand">{prev.category}</p>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col gap-3 p-8 md:p-12 hover:bg-off-white transition-colors text-right items-end"
            >
              <div className="flex items-center gap-2 label-text text-stone">
                Next
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="font-serif text-xl md:text-2xl text-bark leading-tight">{next.title}</p>
              <p className="label-text text-sand">{next.category}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 bg-bark">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-2xl md:text-3xl text-off-white max-w-lg [text-wrap:balance]">
            Have a site with a story?
          </h2>
          <Link href="/contact" className="btn-primary shrink-0">
            Start an enquiry <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
