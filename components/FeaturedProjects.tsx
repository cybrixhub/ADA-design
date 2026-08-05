import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";
import { projects } from "@/lib/projects";
import { formatAddress } from "@/lib/format-address";

const FEATURED_SLUGS = [
  "44-kidd-circuit-goulburn-nsw-2580",
  "12-dexter-road-lochinvar-nsw-2321",
  "10-mccormack-street-arndell-park-nsw-2148",
];

const featured = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
  (p): p is (typeof projects)[number] => Boolean(p)
);

export default function FeaturedProjects() {
  if (featured.length === 0) return null;

  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-10">
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
              All projects <ArrowRight size={12} />
            </Link>
          </AnimatedFadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-sand/25">
          {featured.map((item) => {
            return (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group cursor-pointer border-r border-b border-sand/25 p-6 md:p-8 flex flex-col bg-cream hover:bg-off-white/60 transition-colors duration-500"
              >
                <div className="flex items-center justify-end mb-4">
                  <span className="label-text text-terracotta text-[0.65rem]">
                    · {item.category}
                  </span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden ring-1 ring-transparent group-hover:ring-sand/50 transition-all duration-500 bg-linen">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/15 transition-colors duration-500" />
                </div>

                <div className="pt-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin size={11} className="text-terracotta shrink-0" />
                    <p className="label-text text-stone truncate">
                      {formatAddress(item.address)}
                    </p>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-bark leading-tight [text-wrap:balance]">
                    {item.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 md:hidden">
          <Link href="/projects" className="btn-outline w-full justify-center">
            All projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
