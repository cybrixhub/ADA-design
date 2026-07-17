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
            sizes="(max-width: 768px) 100vw, 75vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Bottom-left label — refades on slide change */}
      <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16 z-20 space-y-2 max-w-xs">
        <div className="w-24 h-px bg-sand opacity-40" />
        <p key={index} className="label-text text-sand/60 animate-[fadeIn_0.6s_ease]">
          {slides[index].label}
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 md:bottom-16 right-8 md:right-16 z-20 flex items-center gap-3">
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
                i === index ? "w-8 bg-sand" : "w-4 bg-sand/30 group-hover:bg-sand/60"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
