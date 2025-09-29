import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // Note: For Tailwind CSS v4, theme configuration is primarily done
  // in CSS using @theme directive (see src/main.css)
  // This config file is mainly for IDE support and content scanning
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      colors: {
        'slate-custom': {
          800: '#131b2a', // Matches the value in main.css @theme
        },
      },
    },
  },
  plugins: [],
}

export default config