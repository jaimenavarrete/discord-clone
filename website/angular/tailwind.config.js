/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#F2F3F5',
      primary: '#5865F2',
      secondary: '#23A559',
      black: {
        100: '#313338',
        200: '#2B2D31',
        300: '#232428',
        400: '#1E1F22',
      },
      neutral: colors.neutral,
      red: colors.red,
      yellow: colors.yellow,
      sky: colors.sky,
    }
  },
  plugins: [],
}

