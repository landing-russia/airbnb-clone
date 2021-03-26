const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
