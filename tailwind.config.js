/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nature': {
          DEFAULT: '#2B5234',
          50: '#F5F7F5',
          100: '#E8EDE9',
          200: '#C5D4C8',
          300: '#93AE98',
          400: '#618969',
          500: '#2B5234',
          600: '#254A2E',
          700: '#1F3D26',
          800: '#19311F',
          900: '#132518',
        },
        'tryg': {
          DEFAULT: '#E2001A',
          50: '#FFE8EA',
          100: '#FFD1D6',
          200: '#FF9AA3',
          300: '#FF6371',
          400: '#FF2C3E',
          500: '#E2001A',
          600: '#CC0017',
          700: '#B50015',
          800: '#9F0012',
          900: '#880010',
        }
      },
      fontFamily: {
        'logo': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};