/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        light: "#f5ebe0",
        dark: "#262626",
        primary: "#2D6A4F",
        secondary: "#F0F0F0",
        tertiary: "#344e41",
        quaternary: "#37815F",
      },
      keyframes: {
        rainbowText: {
          "0%": { color: "#ff0000" },
          "14%": { color: "#ff7f00" },
          "28%": { color: "#ffff00" },
          "42%": { color: "#00ff00" },
          "56%": { color: "#0000ff" },
          "70%": { color: "#4b0082" },
          "84%": { color: "#9400d3" },
          "100%": { color: "#ff0000" },
        },
      },
      animation: {
        rainbowText: "rainbowText 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
