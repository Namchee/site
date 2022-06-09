const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
  theme: {
    fontFamily: {
      sans: ['Open Sauce One', 'Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'sm': '14.4px',
      'base': '18px',
      'lg': '22.5px',
      'xl': '28.13px',
      '2xl': '35.16px',
      '3xl': '43.95px',
      '4xl': '54.93px',
      '5xl': '68.66px',
      '6xl': '85.83px',
    },
    extend: {
      backgroundImage: {
        theme: 'linear-gradient(90deg, #FF2A2A 50%, #FF7373 100%);',
      },
      colors: {
        light: '#F5F2EF',
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

