import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrains-mono)",
    },
    extend: {
      colors: {
        "primary": "#1b1e28",
        "secondary": "#27272c",
        "gray-light": "#232329",
        "accent": {
          DEFAULT: "#10b981",
          // #34d399->emerald-400
          // #10b981->emerald-500
          // #e11d48->rose-600
          // #f43f5e->rose-500
          // #14b8a6->teal-500
          // #7c3aed->violet-600
          // #6b21a8->purple-800
          // #db2777->pink-600
          hover: "#6ee7b7",
          // #6ee7b7->emerald-300
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
