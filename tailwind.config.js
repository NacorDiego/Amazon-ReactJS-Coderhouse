const colors = require('tailwindcss/colors')/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: '0.25rem',
      //   sm: '0rem',
      //   md: '0rem',
      //   lg: '0rem',
      //   xl: '0rem',
      // },
      // margin: {
      //   DEFAULT: '0rem',
      //   sm: '0rem',
      //   md: '0rem',
      //   lg: '0rem',
      //   xl: '0rem'
      // }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      error:'#ff0033',
      white: colors.white,
      gray: colors.gray,
      yellow: {
        100: '#FFB100',
        DEFAULT: '#FF9900',
        500: '#F08000'},
      sky: {
        100 : '#00BFFF',
        DEFAULT : '#00A8E1',
        500 : '#0099CC',
      },
      blue: {
        100 : '#88B6F2',
        300 : '#6B90BF',
        500 : '#4F698C',
        700 : '#324359',
        900 : '#151D26',
      },
      light: {
        100 : '#EEF3F9',
        300 : '#D0D4D9'
      }
    },
    extend: {},
  },
  plugins: [],
}
