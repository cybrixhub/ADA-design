import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F2EC",
        linen: "#EDE3D4",
        terracotta: "#C4704F",
        clay: "#9B5235",
        bark: "#2F2018",
        sage: "#7A8C6E",
        stone: "#8C8278",
        sand: "#C9B99A",
        "off-white": "#FDFCFA",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(1.8rem, 3.5vw, 3.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.8vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "label": ["0.7rem", { lineHeight: "1", letterSpacing: "0.2em" }],
      },
      spacing: {
        "18": "4.5rem",
        "section": "8rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
