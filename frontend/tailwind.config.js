/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9f1',
          100: '#faf3e3',
          200: '#f5e5c8',
          300: '#f0d5a0',
          400: '#e5c178',
          500: '#d4a855',
          600: '#c29543',
          700: '#a07a32',
          800: '#8a6628',
          900: '#6d5120',
        },
        burgundy: {
          50: '#fdf5f6',
          100: '#fae8eb',
          200: '#f1cbd5',
          300: '#e5a8b9',
          400: '#d4779a',
          500: '#8b3a62',
          600: '#7d3556',
          700: '#6b2d4a',
          800: '#5a243f',
          900: '#4a1d33',
        },
        cream: '#fdf9f1',
        dark: {
          900: '#4a1d33',
          800: '#5a243f',
          700: '#6b2d4a',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
