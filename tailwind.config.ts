import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4393b6",
          dark: "#3c809d",
          light: "#5fb0d6",
        },
        dark: {
          bg: "#0f172a",
          card: "#1e293b",
          border: "#334155",
          footer: "#090d16",
        },
      },
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
