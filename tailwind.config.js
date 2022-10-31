/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      darkPink: '#ba4270',
      waterWhite: '#fbfcfe',
      sanJuanBlue: '#36536b',
      mirageBlue: '#1b262f',
      charmPink: '#da6d97',
      lightSanJuanBlue: '#6c8294',
    },
    fontFamily: {
      body: ['Public Sans', 'sans-serif'],
      headings: ['DM Serif Display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
