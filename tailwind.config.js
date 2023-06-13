/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{js,jsx}",
    "./src/pages/*.{js,jsx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        letters: "#C7C7C7",
        green: "#ACD9B2",
        background: "#F7F7F7",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      height: {
        100: "100vh",
        500: "500px",
        550: "520px",
      },
    },
    fontWeight: {
      medium: "500",
    },
  },
  plugins: [],
};
