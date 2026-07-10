"use client";

export default function AnimatedTree({
  className = "",
  color = "text-sand",
  opacity = 0.28,
  variant = "oak",
}: {
  className?: string;
  color?: string;
  opacity?: number;
  variant?: "oak" | "pine" | "willow";
}) {
  const uid = `tree-${variant}-${color.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <div aria-hidden="true" className={`pointer-events-none ${color} ${className}`} style={{ opacity }}>
      <svg
        viewBox="0 0 400 700"
        fill="currentColor"
        className="w-full h-full"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <radialGradient id={`${uid}-canopy`} cx="0.5" cy="0.45" r="0.7">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="70%" stopColor="currentColor" stopOpacity="0.75" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
          </radialGradient>
          <radialGradient id={`${uid}-canopy2`} cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.35" />
          </radialGradient>
          <filter id={`${uid}-blur`} x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        {/* Root flare + trunk — tapered silhouette */}
        <path
          d="M175 700
             L180 640 L184 560 L188 480 L192 400 L196 340
             C 198 320 198 300 200 285
             C 202 300 202 320 204 340
             L208 400 L212 480 L216 560 L220 640 L225 700 Z"
          fillOpacity="0.85"
        />

        {/* Trunk texture — subtle bark grooves */}
        <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" fill="none" strokeLinecap="round">
          <path d="M188 680 Q190 620 192 560 Q194 500 196 440" />
          <path d="M210 680 Q208 620 206 560 Q204 500 202 440" />
          <path d="M195 500 L198 380" strokeOpacity="0.25" />
        </g>

        {/* Everything above trunk sways as a unit */}
        <g style={{ transformOrigin: "200px 340px", animation: "treeSway 8s ease-in-out infinite" }}>
          {/* Major structural branches — visible through foliage */}
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeOpacity="0.75">
            <path d="M200 340 Q170 300 140 260 Q110 220 90 190" strokeWidth="8" />
            <path d="M200 340 Q230 300 260 260 Q290 220 310 190" strokeWidth="8" />
            <path d="M200 340 Q195 280 200 220 Q205 160 210 100" strokeWidth="7" />
            <path d="M180 300 Q150 260 128 220 Q108 190 100 160" strokeWidth="5" />
            <path d="M220 300 Q250 260 272 220 Q292 190 300 160" strokeWidth="5" />
            <path d="M195 260 Q175 220 165 180 Q158 150 155 120" strokeWidth="4" />
            <path d="M205 260 Q225 220 235 180 Q242 150 245 120" strokeWidth="4" />
          </g>

          {/* Fine twigs at branch tips */}
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeOpacity="0.55">
            <path d="M90 190 Q78 170 74 148 Q72 128 78 108" strokeWidth="2" />
            <path d="M90 190 Q76 178 62 172 Q46 168 32 172" strokeWidth="1.5" />
            <path d="M310 190 Q322 170 326 148 Q328 128 322 108" strokeWidth="2" />
            <path d="M310 190 Q324 178 338 172 Q354 168 368 172" strokeWidth="1.5" />
            <path d="M210 100 Q212 80 218 62 Q224 44 232 30" strokeWidth="2" />
            <path d="M210 100 Q200 80 194 62 Q188 44 182 30" strokeWidth="2" />
            <path d="M100 160 Q86 148 68 142" strokeWidth="1.5" />
            <path d="M300 160 Q314 148 332 142" strokeWidth="1.5" />
          </g>

          {/* FOLIAGE — wide irregular canopy, branches poke through */}
          {/* Back cloud layer — hazy foundation, wider than tall */}
          <g fill={`url(#${uid}-canopy)`} filter={`url(#${uid}-blur)`}>
            <ellipse cx="200" cy="200" rx="180" ry="95" />
            <ellipse cx="115" cy="180" rx="75" ry="65" />
            <ellipse cx="285" cy="180" rx="75" ry="65" />
            <ellipse cx="200" cy="115" rx="95" ry="60" />
            <ellipse cx="150" cy="140" rx="55" ry="45" />
            <ellipse cx="250" cy="140" rx="55" ry="45" />
          </g>
          {/* Mid layer — irregular tufts with dips between them */}
          <g fill={`url(#${uid}-canopy2)`}>
            <path d="M110 220 Q60 210 55 175 Q52 138 92 130 Q120 128 138 145 Q152 165 148 190 Q142 218 110 220 Z" />
            <path d="M290 220 Q340 210 345 175 Q348 138 308 130 Q280 128 262 145 Q248 165 252 190 Q258 218 290 220 Z" />
            <path d="M165 105 Q130 100 122 68 Q118 40 148 30 Q178 24 192 48 Q198 70 190 92 Q182 108 165 105 Z" />
            <path d="M235 105 Q270 100 278 68 Q282 40 252 30 Q222 24 208 48 Q202 70 210 92 Q218 108 235 105 Z" />
            <path d="M200 195 Q165 210 148 180 Q140 152 168 130 Q196 118 218 128 Q248 138 250 172 Q248 200 220 208 Q205 210 200 195 Z" />
            {/* Small irregular tufts between main clumps for organic edges */}
            <ellipse cx="85" cy="155" rx="24" ry="20" />
            <ellipse cx="315" cy="155" rx="24" ry="20" />
            <ellipse cx="180" cy="70" rx="22" ry="18" />
            <ellipse cx="220" cy="70" rx="22" ry="18" />
            <ellipse cx="70" cy="200" rx="28" ry="22" />
            <ellipse cx="330" cy="200" rx="28" ry="22" />
          </g>
          {/* Highlight blobs — sun-lit side, top-left */}
          <g fill="currentColor" fillOpacity="0.55">
            <ellipse cx="148" cy="128" rx="38" ry="26" transform="rotate(-18 148 128)" />
            <ellipse cx="100" cy="172" rx="34" ry="28" transform="rotate(-22 100 172)" />
            <ellipse cx="175" cy="72" rx="30" ry="22" transform="rotate(-10 175 72)" />
            <ellipse cx="200" cy="180" rx="42" ry="30" transform="rotate(-5 200 180)" />
          </g>

          {/* Branches poking through the top of the canopy — key detail for realism */}
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeOpacity="0.85">
            <path d="M210 100 Q212 78 216 58 Q220 40 224 24" strokeWidth="2.5" />
            <path d="M210 100 Q206 78 202 58 Q198 40 194 24" strokeWidth="2.5" />
            <path d="M200 60 Q198 42 200 24 Q202 10 205 -2" strokeWidth="2" />
            <path d="M90 190 Q78 172 72 152 Q68 132 74 114" strokeWidth="2.5" />
            <path d="M310 190 Q322 172 328 152 Q332 132 326 114" strokeWidth="2.5" />
            <path d="M74 114 Q66 100 62 84" strokeWidth="1.6" />
            <path d="M326 114 Q334 100 338 84" strokeWidth="1.6" />
          </g>

          {/* Edge detail — individual small leaves poking out of the silhouette */}
          <g fill="currentColor" fillOpacity="0.9">
            {[
              [60, 165, -35], [50, 178, -50], [72, 148, -20],
              [340, 165, 35], [350, 178, 50], [328, 148, 20],
              [232, 30, 25], [218, 22, 10], [200, 20, -8], [182, 22, -20],
              [70, 210, -10], [330, 210, 10],
              [190, 65, -12], [210, 65, 12],
              [40, 175, -55], [360, 175, 55],
            ].map(([cx, cy, rot], i) => (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx={7}
                ry={3.2}
                transform={`rotate(${rot} ${cx} ${cy})`}
                style={{
                  animation: `leafShimmer ${3.5 + (i % 4)}s ease-in-out ${i * 0.2}s infinite`,
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
