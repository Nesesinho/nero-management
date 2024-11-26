/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, js, ts, jsx, tsx}'],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      colors: {
        indigoNavbarBg: '#1D1E44',
        indigoNavbarSt: '#282749',
        indigoBackground: '#141432',
        indigoHoverButton: '#282551',
      }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}

