/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      xs: { max: "480px" },
      sm: { min: "481px", max: "768px" },
      md: { min: "769px", max: "1023px" },
      lg: { min: "1024px", max: "1200px" },
      xl: { min: "1201px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      fontFamily: {
        alegreya: ["Alegreya Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
