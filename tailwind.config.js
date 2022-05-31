const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
  theme: {
    fontFamily: {
      sans: ['Open Sauce One', 'Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'sm': '13.5px',
      'base': '18px',
      'lg': '20px',
      'xl': '23.99px',
      '2xl': '31.98px',
      '3xl': '42.63px',
      '4xl': '56.83px',
      '5xl': '75.76px',
      '6xl': '100.98px',
    },
    extend: {
      backgroundImage: {
        'theme-gradient': 'linear-gradient(90deg, #FE7E6D 18.45%, #FF7B76 23.23%, #FF797F 28.01%, #FF7789 32.79%, #FF7694 37.57%, #FF769E 42.35%, #FF76A9 47.13%, #FF77B4 51.91%, #FF79BF 56.69%, #FF7BCA 61.47%)',
      },
      colors: {
        light: {
          DEFAULT: '#F6F6F6',
          600: '#C0C0C0',
        },
        gray: {
          DEFAULT: '#6F6F6F',
          600: '#585858',
          800: '#222222',
        },
        primary: {
          DEFAULT: '#FE7E6D',
          600: '#FE4F38',
        },
        accent: '#F87CA8',
      },
    },
  },
};

