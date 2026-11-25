/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f6f8f5",
          100: "#eaf0e8",
          200: "#d7e4d3",
          300: "#b2c7ab", // Reference signature accent color
          400: "#98b390",
          500: "#7c9a73",
          600: "#5e7956",
          700: "#495e43",
          800: "#3a4b35",
          900: "#273324",
        },
        paper: {
          DEFAULT: "#f6f5f0",
          surface: "#ffffff",
          subtle: "#edece6",
          dark: "#0d0f0e",
          darkSurface: "#141715",
          darkSubtle: "#1c201d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 32s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
