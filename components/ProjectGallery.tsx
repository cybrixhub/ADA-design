"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hero = images[0];
  const rest = images.slice(1);

  return (
    <>
      {/* Hero image */}
      {hero && (
        <div
          className="relative aspect-[4/3] overflow-hidden bg-cream cursor-pointer"
          onClick={() => setLightboxIndex(0)}
        >
          <Image
            src={hero}
            alt={title}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      {/* Additional renders */}
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
                  className={`relative overflow-hidden bg-linen cursor-pointer ${
                    i === 0 && rest.length > 2 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                  onClick={() => setLightboxIndex(i + 1)}
                >
                  <Image
                    src={src}
                    alt={`${title} — view ${i + 2}`}
                    fill
                    className="object-contain"
                    sizes={i === 0 && rest.length > 2 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
