/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: {
        400: "#e26969",
        900: "#DB4444",
      },
      black: "#000",
      white: "#fff",
      gray: {
        100: "#F5F5F5",
        200: "rgba(0, 0, 0, .2)",
        300: "rgb(100 116 139)",
        400: "rgb(51 65 85)",
      },
    },
    extend: {},
  },
  plugins: [],
};
