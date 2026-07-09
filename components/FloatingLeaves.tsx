"use client";

import { useEffect, useMemo, useState } from "react";

type Leaf = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  sway: number;
  rotate: number;
  variant: 0 | 1 | 2 | 3;
  opacity: number;
  hue: number;
};

/**
 * Realistic leaf silhouettes, viewBox 0 0 40 60.
 * Each has a body path + vein overlay for a botanical feel.
 */
const LEAVES = [
  {
    // Rounded elm — classic teardrop with pointed tip and base
    body: "M20 3 C13 7 8 14 8 24 C8 34 12 44 20 56 C28 44 32 34 32 24 C32 14 27 7 20 3 Z",
    veins: "M20 5 L20 54 M20 16 L11 20 M20 16 L29 20 M20 26 L9 30 M20 26 L31 30 M20 36 L11 40 M20 36 L29 40 M20 46 L14 49 M20 46 L26 49",
  },
  {
    // Willow — slim tapered
    body: "M20 3 C17 10 15 20 15 30 C15 42 17 52 20 57 C23 52 25 42 25 30 C25 20 23 10 20 3 Z",
    veins: "M20 5 L20 55 M20 14 L15 18 M20 14 L25 18 M20 24 L14 27 M20 24 L26 27 M20 34 L14 37 M20 34 L26 37 M20 44 L16 46 M20 44 L24 46",
  },
  {
    // Oak — lobed with soft curves
    body: "M20 3 Q18 8 14 9 Q9 8 7 14 Q3 16 6 22 Q3 26 7 29 Q3 34 9 36 Q7 42 13 42 Q11 48 17 48 Q15 54 20 56 Q25 54 23 48 Q29 48 27 42 Q33 42 31 36 Q37 34 33 29 Q37 26 34 22 Q37 16 33 14 Q31 8 26 9 Q22 8 20 3 Z",
    veins: "M20 5 L20 54 M20 15 L11 15 M20 15 L29 15 M20 24 L7 24 M20 24 L33 24 M20 34 L9 36 M20 34 L31 36 M20 44 L14 46 M20 44 L26 46",
  },
  {
    // Aspen — heart-round with clear tip
    body: "M20 4 C14 7 9 13 8 22 C7 32 11 44 18 54 Q20 56 22 54 C29 44 33 32 32 22 C31 13 26 7 20 4 Z",
    veins: "M20 6 L20 53 M20 18 L11 22 M20 18 L29 22 M20 30 L9 34 M20 30 L31 34 M20 42 L13 46 M20 42 L27 46",
  },
];

const HUES = ["#B08560", "#8C5A3C", "#C9A57A", "#7A5C3A", "#A47148", "#6E4A2E"];

export default function FloatingLeaves({
  count = 18,
  color = "text-sand",
  className = "",
  realistic = true,
}: {
  count?: number;
  color?: string;
  className?: string;
  realistic?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const leaves = useMemo<Leaf[]>(() => {
    if (!mounted) return [];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 22 + Math.random() * 24,
      size: 16 + Math.random() * 26,
      sway: 50 + Math.random() * 120,
      rotate: Math.random() * 360,
      variant: Math.floor(Math.random() * 4) as 0 | 1 | 2 | 3,
      opacity: 0.4 + Math.random() * 0.5,
      hue: Math.floor(Math.random() * HUES.length),
    }));
  }, [count, mounted]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {leaves.map((leaf) => {
        const shape = LEAVES[leaf.variant];
        const gradId = `leafgrad-${leaf.id}-${leaf.hue}`;
        const tint = realistic ? HUES[leaf.hue] : "currentColor";
        return (
          <span
            key={leaf.id}
            className={`absolute top-[-10%] ${color}`}
            style={{
              left: `${leaf.left}%`,
              width: `${leaf.size}px`,
              height: `${leaf.size * 1.5}px`,
              opacity: leaf.opacity,
              animation: `leafFall ${leaf.duration}s linear ${leaf.delay}s infinite`,
              ["--sway" as string]: `${leaf.sway}px`,
              ["--rot" as string]: `${leaf.rotate}deg`,
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))",
            }}
          >
            <svg
              viewBox="0 0 40 60"
              className="w-full h-full"
              style={{ animation: `leafSpin ${9 + leaf.duration / 5}s ease-in-out infinite` }}
            >
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={tint} stopOpacity="0.95" />
                  <stop offset="60%" stopColor={tint} stopOpacity="0.75" />
                  <stop offset="100%" stopColor={tint} stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path d={shape.body} fill={`url(#${gradId})`} />
              <path
                d={shape.veins}
                stroke={tint}
                strokeOpacity="0.55"
                strokeWidth="0.6"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
}
