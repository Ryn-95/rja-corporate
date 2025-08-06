/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        'bg': '#FFFFFF',
        'dark': '#000000',
        'text': '#000000',
        'muted': '#666666',
        'line': 'rgba(0,0,0,0.1)',
        'overlay': 'rgba(0,0,0,0.4)'
      },
      fontFamily: {
        'sans': ['Louis Vuitton Web', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['Louis Vuitton Web', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      fontSize: {
        'nav': ['14px', '1.4'],
        'menu': ['24px', '1.2'],
        'submenu': ['13px', '1.4'],
      },
      height: {
        'header': '60px',
        'header-lg': '80px'
      },
      spacing: {
        'menu': '60px'
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'menu': 'cubic-bezier(0.215, 0.61, 0.355, 1)'
      }
    },
  },
  plugins: [],
}

