/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#EBF9FA",
      "secondary": "#0A3F67",
      "accent": "#2D867F",
      "correct": "#0ACF1E",
      "wrong" : "#E01111",
      "disabled" : "#D2D6D9"
    },
    fontFamily: {
      "itim" : "Itim",
      "poppins": "Poppins",
      "abhaya": "Abhaya Libre"
    },
    extend: {},
  },
  plugins: [],
}

