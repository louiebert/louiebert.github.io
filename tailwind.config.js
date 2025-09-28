/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
    "./animations.js",
    "./css/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        'slate-custom': {
          800: '#131b2a',
        }
      }
    },
  },
  plugins: [],
}