const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['../templates/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal
      },
      spacing: {
        "25vh": "25vh",
        "50vh": "50vh",
        "75vh": "75vh"
      },
      borderRadius: {
        xl: "1.5rem"
      },
      minHeight: {
        "50vh": "50vh",
        "75vh": "75vh"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
