const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./src/**/*.tsx",
    "./dist/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        gray: colors.blueGray,
        yellow: colors.amber,
      }
    }
  },
  variants: {},
  plugins: [],
};