"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function AnimatedFadeIn({
  children,
  className,
  delay = 0,
  y = 30,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(el, {
        opacity: 0,
        y,
        duration: 0.9,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    };

    init();
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
