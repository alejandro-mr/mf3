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
          dark: "#1EAC8A",
        },
        gold: "#CEAA5B",
        mustard: "#FAB348",
        violet: {
          neutral: "#9888FF",
        },
        red: {
          neutral: "#F64161",
          dark: "#D62C4A",
        },
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        franklin: ["Libre Franklin", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.02em",
      },
      boxShadow: {
        card: "0 4px 20px rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
