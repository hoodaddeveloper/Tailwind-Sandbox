/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    /* Screen breakpoints customization*/
    /* screens: {
      'sm': '576px',
      'md': '800px',
      'lg': '1050px'
    }, */
    /* Adding new things to Tailwind */
    extend: {
      /* Adding new screen breakpoint */
      screens: {
        'hoodad': '1500px'
      },
      /* Adding new colors */
      colors: {
        'Sabzabi': '#34ebb4'
      },
      /* Adding new spacing */
      spacing: {
        'newsize': '30rem'
      }
    }
  },
  plugins: [],
}
