import type { Config } from "tailwindcss";

// Design tokens mirror the approved prototype (see src/styles/prototype.css :root).
// Preflight is disabled so Tailwind reset never alters the prototype exact look.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        muted: "var(--mut)",
        brand: { DEFAULT: "#0b57d0", dark: "#0a4cb8" },
        accent: "#f2692b",
        surface: "var(--card)",
      },
      fontFamily: { sans: ["Outfit", "Century Gothic", "Avenir", "sans-serif"] },
      boxShadow: { shell: "var(--sh)" },
      borderRadius: { shell: "28px" },
    },
  },
  plugins: [],
} satisfies Config;
