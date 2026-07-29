import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjects, getProjectBySlug } from "@/lib/admin/kv";
import { formatAddress } from "@/lib/format-address";
import ProjectLightbox from "@/components/ProjectLightbox";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — AD Design`,
    description: project.description.slice(0, 160),
    openGraph: {
      title: `${project.title} — AD Design`,
      description: project.description.slice(0, 160),
      ...(project.images[0] && {
        images: [{ url: project.images[0], width: 1200, height: 630, alt: project.title }],
      }),
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const [project, projects] = await Promise.all([getProjectBySlug(slug), getProjects()]);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  const [mainImage, ...moreImages] = project.images;

  return (
    <>
      {/* ── HEADLINE ── */}
      <section className="pt-20 md:pt-24 pb-6 md:pb-8 bg-linen">
        <div className="container-wide">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 label-text text-stone hover:text-bark mb-8 group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            All projects
          </Link>

          <p className="label-text text-terracotta mb-3">{project.category}</p>
          <h1 className="font-serif text-display-lg text-bark leading-tight [text-wrap:balance] max-w-2xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* ── MAIN IMAGE ── full width */}
      {mainImage && (
        <ProjectLightbox images={project.images} startIndex={0}>
          <div className="relative w-full bg-cream cursor-pointer" style={{ aspectRatio: "16/9", maxHeight: "72vh" }}>
            <Image
              src={mainImage}
              alt={project.title}
              fill
              priority
              className="object-contain hover:scale-[1.01] transition-transform duration-700"
              sizes="100vw"
              quality={90}
            />
          </div>
        </ProjectLightbox>
      )}

      {/* ── BRIEFING / SPECS ── */}
      <section className="bg-linen border-t border-sand/20">
        <div className="container-wide py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-sand/30">
            <div className="pl-0">
              <p className="label-text text-stone mb-2">Type</p>
              <p className="text-bark text-sm font-light">{project.category}</p>
            </div>
            <div className="pl-6 md:pl-8">
              <p className="label-text text-stone mb-2">Location</p>
              <p className="text-bark text-sm font-light">{formatAddress(project.address)}</p>
            </div>
            <div className="pl-6 md:pl-8">
              <p className="label-text text-stone mb-2">Region</p>
              <p className="text-bark text-sm font-light">NSW, Australia</p>
            </div>
            <div className="pl-6 md:pl-8">
              <p className="label-text text-stone mb-2">Architects</p>
              <p className="text-bark text-sm font-light">AD Design Pty Ltd</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL IMAGES ── */}
      {moreImages.length > 0 && (
        <section className="bg-off-white py-10 md:py-14">
          <div className="container-wide">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-5 h-px bg-stone/40" />
              <p className="label-text text-stone">
                {moreImages.length === 1 ? "Alternate view" : `${moreImages.length} more views`}
              </p>
            </div>
            <ProjectLightbox images={project.images} startIndex={1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {moreImages.map((src, i) => (
                  <div
                    key={src}
                    className={`relative overflow-hidden bg-linen cursor-pointer rounded-sm ${
                      i === 0 && moreImages.length > 2 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — view ${i + 2}`}
                      fill
                      className="object-contain hover:scale-[1.02] transition-transform duration-500"
                      sizes={i === 0 && moreImages.length > 2 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                      quality={90}
                    />
                  </div>
                ))}
              </div>
            </ProjectLightbox>
          </div>
        </section>
      )}

      {/* ── DESCRIPTION ── */}
      {project.description && (
        <section className="section-pad bg-cream border-t border-sand/20">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-3">
                <p className="label-text text-stone mb-4">Project brief</p>
                <div className="w-8 h-px bg-terracotta" />
              </div>
              <div className="md:col-span-9">
                <p className="font-serif text-lg md:text-xl text-bark leading-relaxed font-light [text-wrap:pretty]">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED PROJECTS ── */}
      {related.length > 0 && (
        <section className="section-pad bg-linen">
          <div className="container-wide">
            <p className="label-text text-stone mb-8">More in {project.category}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/projects/${r.slug}`} className="group flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream mb-4 rounded-sm">
                    {r.images[0] && (
                      <Image
                        src={r.images[0]}
                        alt={r.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  <p className="label-text text-stone mb-1">{formatAddress(r.address)}</p>
                  <h3 className="font-serif text-xl text-bark leading-tight">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROJECT NAV ── */}
      <section className="border-t border-sand/25 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-2">
            {/* Previous */}
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col border-r border-sand/25 hover:bg-off-white transition-colors overflow-hidden"
            >
              {prev.images[0] && (
                <div className="relative w-full aspect-[16/7] overflow-hidden bg-cream">
                  <Image
                    src={prev.images[0]}
                    alt={prev.title}
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="50vw"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 p-6 md:p-8">
                <div className="flex items-center gap-2 label-text text-stone">
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                  Previous
                </div>
                <p className="font-serif text-lg md:text-xl text-bark leading-tight">{prev.title}</p>
                <p className="label-text text-sand">{prev.category}</p>
              </div>
            </Link>

            {/* Next */}
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col hover:bg-off-white transition-colors text-right items-end overflow-hidden"
            >
              {next.images[0] && (
                <div className="relative w-full aspect-[16/7] overflow-hidden bg-cream">
                  <Image
                    src={next.images[0]}
                    alt={next.title}
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="50vw"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 p-6 md:p-8 items-end">
                <div className="flex items-center gap-2 label-text text-stone">
                  Next
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="font-serif text-lg md:text-xl text-bark leading-tight">{next.title}</p>
                <p className="label-text text-sand">{next.category}</p>
              </div>
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
