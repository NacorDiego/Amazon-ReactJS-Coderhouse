const colors = require('tailwindcss/colors')/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparente: 'transparent',
      current: 'currentColor',
      blanco: colors.white,
      primario: {
        light: '#FFB700',
        DEFAULT: '#FF9900',
        dark: '#F79400'},
      detalle: '#00A8E1',
      oscuro: '#141B24',
      claro: '#EEF3F9'
    },
    extend: {},
  },
  plugins: [],
}
