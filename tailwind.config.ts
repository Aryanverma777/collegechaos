import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dmSans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        accent: {
          purple: "#7c6aff",
          pink: "#ff6aab",
          teal: "#6affd4",
          red: "#ff4757",
          amber: "#ffb347",
          blue: "#4da6ff",
        },
        'yt-dark': '#0f0f0f',
        'yt-surface': '#212121',
        'yt-elevated': '#272727',
        'ig-white': '#ffffff',
        'ig-border': '#dbdbdb',
        'ig-muted': '#737373',
        'ig-blue': '#0095f6',
        'ig-red': '#ff3040',
        'cc-purple': '#7c6aff',
        'cc-pink': '#ff6aab',
        'cc-teal': '#6affd4',
        background: {
          dark: "#09090f",
          light: "#f0f0fa",
        },
        text: {
          primaryDark: "#eeeef8",
          secondaryDark: "#9898b8",
          primaryLight: "#18182e",
        },
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #7c6aff, #ff6aab)",
        "glass-dark": "rgba(255,255,255,0.04)",
        "glass-light": "rgba(255,255,255,0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
