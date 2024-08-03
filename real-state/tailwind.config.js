/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        Be_Vietnam: ["Be Vietnam Pro", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        League_Spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
