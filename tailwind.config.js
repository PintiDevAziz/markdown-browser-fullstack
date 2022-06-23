/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeGray: "#2C2D31",
        themeBlack: "#15161A",
        themeOrange: "#E66843",
        themeGrayDarker: "#1E1F23",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
