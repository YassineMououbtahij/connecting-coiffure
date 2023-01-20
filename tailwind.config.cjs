/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      primary: "#B7A86D",
      gray: "#3C4858",
      black: "#000",
      transparent: "rgba(0,0,0,0)",
      midtransparent: "rgba(0,0,0,0.6)",
      white: "#fff",
      red: "#FF0000",
    },
    fontFamily: {
      'ballantines': ['ballantines', 'sans'],
      'raleway': ['raleway', 'sans'],
    }
  },
  plugins: [],
}
