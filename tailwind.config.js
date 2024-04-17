
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/*.{vue,js,ts,jsx,tsx,css}', 'node_modules/preline/dist/*.js',],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('preline/plugin')],
}

