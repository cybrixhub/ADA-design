"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "ada-loader-shown";

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem(SESSION_KEY);
  });

  useEffect(() => {
    if (!mounted) return;
    sessionStorage.setItem(SESSION_KEY, "1");

    let cancelled = false;

    const init = async () => {
      const mod = await import("gsap");
      if (cancelled) return;
      const { gsap } = mod;

      const counter = { val: 0 };

      gsap.timeline().to(counter, {
        val: 100,
        duration: 1.6,
        ease: "power2.inOut",
        onUpdate() {
          if (countRef.current) {
            countRef.current.textContent = Math.round(counter.val) + "%";
          }
        },
      }).to(loaderRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.15,
        onComplete: () => setMounted(false),
      });
    };

    init();

    return () => {
      cancelled = true;
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-off-white/70 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
    >
      {/* Corner brackets — softer on the light backdrop */}
      <svg className="absolute top-6 left-6 text-bark/25" width="14" height="14" viewBox="0 0 10 10" fill="none">
        <path d="M10 0V1H1V10H0V0H10Z" fill="currentColor" />
      </svg>
      <svg className="absolute top-6 right-6 text-bark/25" width="14" height="14" viewBox="0 0 10 10" fill="none">
        <path d="M10 0V10H9V1H0V0H10Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-6 left-6 text-bark/25" width="14" height="14" viewBox="0 0 10 10" fill="none">
        <path d="M0 10V0H1V9H10V10H0Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-6 right-6 text-bark/25" width="14" height="14" viewBox="0 0 10 10" fill="none">
        <path d="M10 10V0H9V9H0V10H10Z" fill="currentColor" />
      </svg>

      {/* Logo */}
      <Image
        src="/ada-logo.jpg"
        alt="ADA Design"
        width={220}
        height={120}
        priority
        className="h-20 md:h-28 w-auto mix-blend-multiply"
      />

      {/* Counter */}
      <p className="font-serif text-[clamp(2.5rem,9vw,7rem)] leading-none text-bark/85 tracking-tighter font-light">
        <span ref={countRef}>0%</span>
      </p>

      {/* Bottom label */}
      <p className="absolute bottom-8 font-sans text-[0.65rem] tracking-[0.25em] uppercase text-bark/40">
        Architectural Design · NSW
      </p>
    </div>
  );
}
