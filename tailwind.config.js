/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
         sm: '100%',
         md: '100%',
         lg: '100%',
         xl: '100%',
         '2xl': '1680px'
      }
    },
    extend: {
      fontFamily: {
        'sans': [
          'SofiaPro',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif'
        ],
        'serif': [
          'Playfair Display',
          'Georgia',
          'serif'
        ]
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
