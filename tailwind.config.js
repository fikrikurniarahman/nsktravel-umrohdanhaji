/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#b01820', dark: '#8a1017' }, night: '#0e1420', gold: '#d2ab5a', paper: '#faf8f6', tint: '#f2eeea', wa: { DEFAULT: '#1faa59', dark: '#178a48' } },
      fontFamily: { sans: ['Figtree', 'system-ui', 'sans-serif'], display: ['"Bricolage Grotesque"', 'sans-serif'], arab: ['Amiri', 'serif'] },
    },
  },
  plugins: [],
}
