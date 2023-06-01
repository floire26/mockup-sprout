/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pokemon': "url('/images/start_menu.png')",
        'info': "url('/images/back.png')"
      },
      fontFamily: {
        pokemon: ['var(--font-pokemon)'],
        title: ['var(--font-title)']
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        'pulse-button': 'pulse-button 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        'side': 'side 3s infinite',
        'side-trainer': 'side-trainer 3s infinite'
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: 0
          }
        },
        'pulse-button':{
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: 0.3
          }
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '50%': {
            transform: 'translateY(-20%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          }
        },
        'side': {
          '0%, 100%': {
            transform: 'translateX(-10%) translateY(-5%)'
          },
          '50%': {
            transform: 'translateX(10%) translateY(5%)'
          }
        },
        'side-trainer': {
          '0%, 100%': {
            transform: 'translateX(-20%)'
          },
          '50%': {
            transform: 'translateX(20%)'
          }
        }
      }
    },
  },
  plugins: [],
}
