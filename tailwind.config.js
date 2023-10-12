/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
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
  plugins: [],
}
