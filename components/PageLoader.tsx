"use client";

import { useEffect, useRef, useState } from "react";

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let gsap: typeof import("gsap").gsap;

    const init = async () => {
      const mod = await import("gsap");
      gsap = mod.gsap;

      const counter = { val: 0 };

      const tl = gsap.timeline();

      tl.to(counter, {
        val: 100,
        duration: 1.6,
        ease: "power2.inOut",
        onUpdate() {
          if (countRef.current) {
            countRef.current.textContent = Math.round(counter.val) + "%";
          }
        },
      }).to(
        loaderRef.current,
        {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
          delay: 0.15,
          onComplete: () => setMounted(false),
        }
      );
    };

    init();
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[200] bg-bark flex flex-col items-end justify-end pb-14 pr-14"
    >
      {/* Corner brackets */}
      <svg className="absolute top-6 left-6 text-sand/30" width="14" height="14" viewBox="0 0 10 10" fill="none">
        <path d="M10 0V1H1V10H0V0H10Z" fill="currentColor" />
      </svg>
      <svg className="absolute top-6 right-6 text-sand/30" width="14" height="14" viewBox="0 0 10 10" fill="none">
        <path d="M10 0V10H9V1H0V0H10Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-6 left-6 text-sand/30" width="14" height="14" viewBox="0 0 10 10" fill="none">
        <path d="M0 10V0H1V9H10V10H0Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-6 right-6 text-sand/30" width="14" height="14" viewBox="0 0 10 10" fill="none">
        <path d="M10 10V0H9V9H0V10H10Z" fill="currentColor" />
      </svg>

      {/* Brand */}
      <p className="absolute top-6 left-14 font-serif text-2xl tracking-[0.12em] text-off-white/80">
        AD DESIGN
      </p>

      {/* Counter */}
      <p className="font-serif text-[clamp(5rem,18vw,16rem)] leading-none text-off-white tracking-tighter">
        <span ref={countRef}>0%</span>
      </p>

      {/* Bottom label */}
      <p className="absolute bottom-7 left-14 font-sans text-[0.65rem] tracking-[0.25em] uppercase text-sand/30">
        Architectural Design · NSW
      </p>
    </div>
  );
}
