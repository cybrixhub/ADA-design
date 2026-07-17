"use client";

export default function AnimatedTree({
  className = "",
  color = "text-sand",
  opacity = 0.28,
}: {
  className?: string;
  color?: string;
  opacity?: number;
  variant?: "oak" | "pine" | "willow";
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none ${color} ${className}`} style={{ opacity }}>
      <svg
        viewBox="0 0 400 700"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Trunk — solid, doesn't sway */}
        <path d="M198 700 Q200 620 200 540 Q200 460 200 380" strokeWidth="6" />
        <path d="M203 700 Q204 620 204 540" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M197 700 Q195 620 196 540" strokeWidth="1.5" strokeOpacity="0.5" />

        {/* Everything above the fork sways */}
        <g style={{ transformOrigin: "200px 380px", animation: "treeSway 9s ease-in-out infinite" }}>
          {/* Primary fork — three main leads */}
          <path d="M200 380 Q170 340 138 300 Q108 260 82 210" strokeWidth="5" />
          <path d="M200 380 Q230 340 262 300 Q292 260 318 210" strokeWidth="5" />
          <path d="M200 380 Q198 320 202 250 Q206 180 210 110" strokeWidth="4.5" />

          {/* Secondary branches off the left lead */}
          <path d="M138 300 Q118 275 96 258 Q72 240 50 232" strokeWidth="2.6" />
          <path d="M108 260 Q92 232 80 208 Q70 184 68 158" strokeWidth="2.4" />
          <path d="M82 210 Q68 194 52 184 Q34 174 18 172" strokeWidth="2.2" />
          <path d="M82 210 Q76 186 74 160 Q72 132 78 108" strokeWidth="2.2" />

          {/* Secondary branches off the right lead */}
          <path d="M262 300 Q282 275 304 258 Q328 240 350 232" strokeWidth="2.6" />
          <path d="M292 260 Q308 232 320 208 Q330 184 332 158" strokeWidth="2.4" />
          <path d="M318 210 Q332 194 348 184 Q366 174 382 172" strokeWidth="2.2" />
          <path d="M318 210 Q324 186 326 160 Q328 132 322 108" strokeWidth="2.2" />

          {/* Secondary branches off the center lead */}
          <path d="M202 250 Q180 226 158 210 Q136 194 120 190" strokeWidth="2.4" />
          <path d="M202 250 Q224 226 246 210 Q268 194 284 190" strokeWidth="2.4" />
          <path d="M206 180 Q188 158 176 132 Q168 108 168 82" strokeWidth="2.2" />
          <path d="M206 180 Q224 158 236 132 Q244 108 244 82" strokeWidth="2.2" />
          <path d="M210 110 Q206 88 208 62 Q212 38 216 18" strokeWidth="2" />
          <path d="M210 110 Q214 88 216 62 Q220 38 226 18" strokeWidth="2" />

          {/* Fine twigs — outermost stroke, thinnest */}
          <g strokeWidth="1.2" strokeOpacity="0.75">
            <path d="M50 232 Q36 224 22 224" />
            <path d="M50 232 Q44 216 42 200" />
            <path d="M68 158 Q58 142 56 124" />
            <path d="M68 158 Q54 152 40 154" />
            <path d="M18 172 Q10 164 4 152" />
            <path d="M78 108 Q72 94 72 78" />
            <path d="M78 108 Q66 104 54 108" />
            <path d="M120 190 Q108 180 92 178" />
            <path d="M168 82 Q166 66 172 50" />
            <path d="M168 82 Q158 76 148 76" />
            <path d="M244 82 Q246 66 240 50" />
            <path d="M244 82 Q254 76 264 76" />
            <path d="M216 18 Q218 8 222 0" />
            <path d="M226 18 Q230 8 236 2" />

            <path d="M350 232 Q364 224 378 224" />
            <path d="M350 232 Q356 216 358 200" />
            <path d="M332 158 Q342 142 344 124" />
            <path d="M332 158 Q346 152 360 154" />
            <path d="M382 172 Q390 164 396 152" />
            <path d="M322 108 Q328 94 328 78" />
            <path d="M322 108 Q334 104 346 108" />
            <path d="M284 190 Q296 180 312 178" />
          </g>

          {/* Sparse buds — tiny circles at select tips to suggest life without foliage */}
          <g fill="currentColor" stroke="none" fillOpacity="0.55">
            {[
              [4, 152], [22, 224], [42, 200], [56, 124], [72, 78],
              [396, 152], [378, 224], [358, 200], [344, 124], [328, 78],
              [172, 50], [240, 50], [222, 0], [236, 2],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={1.6}
                style={{
                  animation: `leafShimmer ${4 + (i % 3)}s ease-in-out ${i * 0.25}s infinite`,
                  transformOrigin: `${cx}px ${cy}px`,
                }}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
