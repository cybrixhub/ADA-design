"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  images: string[];
  index: number;
  title: string;
  containerClassName?: string;
  sizes?: string;
  priority?: boolean;
};

export default function ClickableImage({
  images,
  index,
  title,
  containerClassName = "relative aspect-[3/2] w-full overflow-hidden bg-linen",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  const src = images[index];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(index)}
        className={`${containerClassName} group cursor-zoom-in block`}
        aria-label={`Open ${title} image ${index + 1} fullscreen`}
      >
        <Image
          src={src}
          alt={title}
          fill
          priority={priority}
          className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={sizes}
        />
      </button>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] bg-bark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-[fadeIn_0.2s_ease]"
          onClick={close}
        >
          <button
            type="button"
            className="absolute top-5 right-5 md:top-8 md:right-8 text-off-white/70 hover:text-off-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-off-white/70 hover:text-off-white transition-colors z-10 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                type="button"
                className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-off-white/70 hover:text-off-white transition-colors z-10 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}

          <div
            className="relative w-full h-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open]}
              alt={title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
