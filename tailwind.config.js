/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ['DM Sans', 'san-serif']
      },
      colors: {
        primary: '#f62682'
      }
    }
  },
  plugins: []
}
