/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // App Router pages/components
    './components/**/*.{js,ts,jsx,tsx}', // Common components
    './pages/**/*.{js,ts,jsx,tsx}',     // Dacă mai ai pagini clasice
  ],
  theme: {
    extend: {
      colors: {
        gold: 'hsl(var(--gold))',
        charcoal: 'hsl(var(--charcoal))',
        cream: 'hsl(var(--cream))',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        dancing: ['var(--font-dancing)', 'cursive'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
