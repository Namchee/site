const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
  theme: {
    fontFamily: {
      sans: ['Open Sauce One', 'Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'sm': '0.8rem',
      'lg': '1.25rem',
      'xl': '1.563rem',
      '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '3.052rem',
      '5xl': '3.815rem',
      '6xl': '4.768rem',
      '7xl': '5.96rem'
    },
    extend: {
      backgroundImage: {
        'theme-gradient': 'linear-gradient(90deg, #FE7E6D 18.45%, #FF7B76 23.23%, #FF797F 28.01%, #FF7789 32.79%, #FF7694 37.57%, #FF769E 42.35%, #FF76A9 47.13%, #FF77B4 51.91%, #FF79BF 56.69%, #FF7BCA 61.47%)',
      },
      colors: {
        light: '#F6F6F6',
        grey: '#6F6F6F',
        dark: '#2C3333',
        primary: {
          light: '#FF7373',
          DEFAULT: '#FF5D5D',
          dark: '#FF2A2A',
        },
        accent: {
          light: '#77A2FF',
          DEFAULT: '#5F91FF',
          dark: '#2F71FF',
        },
      },
    },
  },
};

