/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html",  "./themes/"],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};