"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type HeroSlide = { src: string; alt: string; label: string };

export default function HeroSlideshow({
  slides,
  interval = 5000,
}: {
  slides: HeroSlide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);

  return (
    <>
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Label + indicators — bottom-right so they don't fight the copy on the left */}
      <div className="absolute bottom-8 md:bottom-16 right-8 md:right-16 z-20 flex flex-col items-end gap-3">
        <p
          key={index}
          className="label-text text-off-white/70 animate-[fadeIn_0.6s_ease] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
        >
          {slides[index].label}
        </p>
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className="group h-6 flex items-center"
            >
              <span
                className={`block h-px transition-all duration-500 ${
                  i === index ? "w-8 bg-off-white" : "w-4 bg-off-white/40 group-hover:bg-off-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
