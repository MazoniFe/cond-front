const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: '#FFFFFF',
          emerald: colors.emerald,
          indigo: colors.indigo,
          yellow: colors.yellow,
          lime: colors.lime,
          rose: colors.rose,
      },
      },
    },
  },
  plugins: [],
}