"use client";

import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export default function AnimatedHeading({
  children,
  className,
  delay = 0,
  as: Tag = "h2",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { SplitText } = await import("gsap/SplitText");

      gsap.registerPlugin(ScrollTrigger, SplitText);

      const split = new SplitText(el, { type: "lines" });

      split.lines.forEach((line: Element) => {
        const wrap = document.createElement("div");
        wrap.style.cssText = "overflow:hidden;display:block;";
        line.parentNode?.insertBefore(wrap, line);
        wrap.appendChild(line);
      });

      gsap.from(split.lines, {
        yPercent: 105,
        duration: 1.0,
        ease: "power4.out",
        stagger: 0.09,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    };

    init();
  }, [delay]);

  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  const AnyTag = Tag as "div";
  return <AnyTag ref={setRef} className={className}>{children}</AnyTag>;
}
