"use client";

import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export default function AnimatedHeading({ children, className, delay = 0, as: Tag = "h2" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";

    let observer: IntersectionObserver;

    const rafId = requestAnimationFrame(() => {
      el.style.transition = `opacity 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}s`;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
      );

      observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [delay]);

  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  const AnyTag = Tag as "div";
  return (
    <AnyTag ref={setRef} className={className}>
      {children}
    </AnyTag>
  );
}
