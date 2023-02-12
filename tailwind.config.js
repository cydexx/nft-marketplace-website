/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#000000",
        "custom-gray": "#454545",
        "custom-white": "#FFFFFF",
        "custom-purple": "#7843E8",
        "custom-yellow": "#FFF253",
      },
      fontFamily: {
        bebas: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        nabla: ["Nabla"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100%, 0)" },
        },
      },
      animation: {
        slide: "slide 120s linear infinite",
      },
    },
  },
  plugins: [],
};
