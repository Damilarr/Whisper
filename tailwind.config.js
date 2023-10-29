/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        holenVintage: "holenVintage",
        exo: ["Exo", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
