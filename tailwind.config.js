module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: "#faddd6",
        green: "#C0E218",
        blue: "#6897ed",
        red: "#E45755",
        gray: "#ECECEC",
        dark: "#253D4E",
        text_gray: "#B6B6B6"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
