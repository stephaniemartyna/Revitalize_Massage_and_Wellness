/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  plugins: [
    require("daisyui"), 
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./*.html", 
    "./ecommerce/*.html", 
    "./assets/**/*.js",
  ],

  theme: {
    colors: {
      'darkgreen': '#9DAAFF', 
      'white': '#ffffff',
      'medgreen': '#779790',
      'lightgreen': '#009B94',
      'lightgrey': '#B3B3B3',
      'darkgrey': '#4B4B4B',
      'beige': '#BDB1A2',
      'black': '#000000',
      'offwhite': '#EDF0EE',
      'maingrey': '#DCDDDB',
      'maingreen': '#009B94',
      'accent': "#9DAAFF",
    },
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },

  
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require("tailgrids/plugin"),
  ],
});