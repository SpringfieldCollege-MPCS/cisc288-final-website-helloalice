/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html",  "./themes/", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/GridBanner.jpg')"
      },
      fontFamily: {
        'customCairo': ['Cairo', 'sans-serif'],
        'customCabin': ['Cabin', 'sans-serif'],
        'customAbril': ['Abril Fatface', 'sans-serif'],
        'customKaushan': ['Kaushan Script', 'sans-serif'],
        'customLobster': ['Lobster', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
      require('flowbite/plugin'),
  ],
};