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
      }
    },
  },
  plugins: [],
}
