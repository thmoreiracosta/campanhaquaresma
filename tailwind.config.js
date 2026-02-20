/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#4A1A6B',
          700: '#6B2D8A',
          200: '#E8D5E8',
          100: '#F5F0F8',
        },
        rose: {
          500: '#D4789C',
          300: '#E8A4BC',
          400: '#E89BAC',
        },
        gold: {
          400: '#C9A227',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        crimson: ['Crimson Pro', 'serif'],
      }
    },
  },
  plugins: [],
}