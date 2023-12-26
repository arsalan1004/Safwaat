/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': 
      {
        100: '#EBF9FA',
        200: '#BCE2E5' 
      },
      'secondary': '#0A3F67',
      'accent': '#2D867F',
      'correct': '#0ACF1E',
      'wrong': '#E01111'
    },
    fontFamily: {
      Montserrat: ['Montserrat'],
      Itim: ['Itim']
    },
    extend: {
      backgroundImage: {
        'flashcraftBg' : 'url(./src/Assets/Background/flashcraftBg.jpg)'
      },
      backfaceVisibility: {
        visible: 'visible',
        hidden: 'hidden',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

