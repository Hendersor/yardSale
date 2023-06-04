/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,jsx}", "./src/styles/**/*.css"],
  theme: {
    extend: {
      colors: {
        letters: "#C7C7C7",
        green: "#ACD9B2",
        background: "",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
    fontWeight: {
      medium: "500",
    },
  },
  plugins: [],
};
