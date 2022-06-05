const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
  theme: {
    fontFamily: {
      sans: ['Open Sauce One', 'Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'xs': '13.5px',
      'sm': '16px',
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
      colors: {
        light: '#F6F6F6',
        grey: '#6F6F6F',
        dark: '#2C3333',
        accent: {
          light: '#FF7373',
          DEFAULT: '#FF5D5D',
          dark: '#FF2A2A',
        },
      },
    },
  },
};

