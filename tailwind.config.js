/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MuliLight: ["MuliLight", "sans-serif"],
        MuliRegular: ["MuliRegural", "sans-serif"],
        HeadingFont: ["HeadingFont", "helvetica, arial, sans-serif"],
        Expert: ["Expert", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
