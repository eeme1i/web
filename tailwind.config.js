module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
        Newsreader: ["Newsreader", "Signifier", "Times", "serif"],
      },
      dropShadow: {
        white: "0PX 0px 5px rgb(255 255 255)",
      },
    },
  },
  plugins: [],
};
