"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "ada-loader-shown";
const COUNT_MS = 1600;
const FADE_MS = 700;

// power2.inOut easing (matches the old GSAP curve)
const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

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

    let rafId = 0;
    let fadeTimer = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_MS);
      const val = Math.round(easeInOutQuad(t) * 100);
      if (countRef.current) countRef.current.textContent = val + "%";

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const el = loaderRef.current;
      if (!el) {
        setMounted(false);
        return;
      }
      el.style.transition = `opacity ${FADE_MS}ms ease-out`;
      // small delay so the "100%" reads
      fadeTimer = window.setTimeout(() => {
        el.style.opacity = "0";
      }, 150);
      el.addEventListener("transitionend", () => setMounted(false), { once: true });
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(fadeTimer);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-off-white/70 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
    >
      {/* Corner brackets */}
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

      <Image
        src="/ada-logo.jpg"
        alt="ADA Design"
        width={220}
        height={120}
        priority
        className="h-20 md:h-28 w-auto mix-blend-multiply"
      />

      <p className="font-serif text-[clamp(2.5rem,9vw,7rem)] leading-none text-bark/85 tracking-tighter font-light">
        <span ref={countRef}>0%</span>
      </p>

      <p className="absolute bottom-8 font-sans text-[0.65rem] tracking-[0.25em] uppercase text-bark/40">
        Architectural Design · NSW
      </p>
    </div>
  );
}
