/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        washi: "#FAF6EE",
        "washi-deep": "#F1EADA",
        torii: "#C0392B",
        "torii-deep": "#9E2E22",
        ink: "#1F2937",
        "ink-soft": "#5B6470",
        stone: "#8B8378",
        matcha: "#5B7A5A",
        "matcha-soft": "#E7EEE3",
        "paper-line": "#DCD3BE",
        gold: "#B8954B",
      },
      fontFamily: {
        serif: ["Shippori Mincho", "serif"],
        sans: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
