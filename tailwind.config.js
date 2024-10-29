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
      screens: {
        /* New screen breakpoint */
        'hoodad': '1500px'
      }
    }
  },
  plugins: [],
}
