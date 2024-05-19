/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#F5F5F5",
          2: "#D0D4D9",
          3: "#9DA4AB",
          4: "#7A8087",
          5: "#21262C",
          6: "#191C1F",
        },
        green: {
          neutral: "#16CB9F",
        },
        gold: "#CEAA5B",
      },
      fontFamily: {
        navigation: ["Bebas Neue", "sans-serif"],
        franklin: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
