/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: "#E8541A",
          light: "#F4712E",
          dark: "#C03E10",
          pale: "rgba(232,84,26,0.15)",
        },
        navy: {
          DEFAULT: "#0D1B3E",
          light: "#162547",
          deep: "#080F22",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C06A",
        },
        cream: {
          DEFAULT: "#F7F2E8",
          dark: "#EDE5D0",
        },
        igreen: "#138808",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        raleway: ["Raleway", "sans-serif"],
        cormorant: ['"Cormorant Garamond"', "serif"],
        hindi: ['"Tiro Devanagari Hindi"', "serif"],
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "0.8", transform: "scaleY(0.6)" },
        },
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        progress: "progress 5.5s linear infinite",
        scrollPulse: "scrollPulse 2s ease-in-out infinite",
        fadeSlideIn: "fadeSlideIn 0.6s ease forwards",
      },
      clipPath: {
        angled: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
        "angled-sm": "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
      },
    },
  },
  plugins: [],
};