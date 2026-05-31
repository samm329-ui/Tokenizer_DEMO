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
        surface: {
          primary: "#F8F4EE",
          card: "#FFFDF9",
        },
        terracotta: {
          DEFAULT: "#C86432",
          hover: "#B45328",
          light: "rgba(200,100,50,.12)",
        },
        espresso: {
          DEFAULT: "#3A2418",
          secondary: "#6B5B52",
          muted: "#9B8A80",
        },
        sand: {
          DEFAULT: "#E8D8CA",
          light: "#F0E6DA",
        },
        dark: {
          DEFAULT: "#1D1A17",
          card: "#28221E",
          muted: "#3A3430",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "hero": ["56px", { lineHeight: "1.05", fontWeight: "700" }],
        "subtitle": ["22px", { lineHeight: "1.5", fontWeight: "500" }],
        "section": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "metric": ["42px", { lineHeight: "1", fontWeight: "700" }],
        "card-label": ["15px", { lineHeight: "1.4", fontWeight: "500" }],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "28px",
      },
      boxShadow: {
        "card": "0 6px 20px rgba(0,0,0,.05)",
        "card-hover": "0 12px 30px rgba(0,0,0,.08)",
        "glow": "0 0 0 4px rgba(200,100,50,.12)",
        "elevated": "0 20px 60px rgba(0,0,0,.1)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "24": "6rem",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
