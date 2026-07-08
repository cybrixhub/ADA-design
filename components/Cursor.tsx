"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;
    let visible = false;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      rafId = requestAnimationFrame(tick);
    };
    tick();

    const onEnter = () => {
      dot.style.opacity = "0";
      ring.style.width = "56px";
      ring.style.height = "56px";
    };

    const onLeave = () => {
      dot.style.opacity = "1";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    window.addEventListener("mousemove", onMove);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-terracotta rounded-full pointer-events-none z-[300] transition-opacity duration-150"
        style={{ opacity: 0, willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 border border-terracotta/60 rounded-full pointer-events-none z-[300] transition-[width,height,opacity] duration-300"
        style={{ width: 36, height: 36, opacity: 0, willChange: "transform" }}
      />
    </>
  );
}
