import colors from './src/config/colors.js';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors, // Spread the imported colors here
      },
    },
  },
  plugins: [],
}