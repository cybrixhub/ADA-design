"use client";

import dynamic from "next/dynamic";

const ProjectMap = dynamic(() => import("./ProjectMap"), { ssr: false });

export default function MapSection({ count }: { count: number }) {
  return (
    <section className="bg-off-white border-b border-sand/25">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-0">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[0.7rem] font-sans font-medium tracking-[0.2em] uppercase text-stone mb-2">
              Where we build
            </p>
            <h2 className="font-serif text-[clamp(1.3rem,2vw,2rem)] text-bark leading-[1.15]">
              Across NSW
            </h2>
          </div>
          <p className="text-stone font-light text-sm max-w-xs text-right leading-relaxed hidden md:block">
            {count} projects spanning Western Sydney,
            <br />Hunter Valley, and beyond.
          </p>
        </div>
      </div>
      <div className="h-[380px] md:h-[480px]">
        <ProjectMap />
      </div>
    </section>
  );
}
