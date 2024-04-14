/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        slateOpacity: 'rgba(70, 90, 126, 0.4)'
      }
    }
  },
  plugins: []
}
