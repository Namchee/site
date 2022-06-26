const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
  theme: {
    fontFamily: {
      sans: ['Open Sauce One', 'Inter', ...defaultTheme.fontFamily.sans],
      mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      'xs': '13.5px',
      'sm': '16px',
      'base': '18px',
      'lg': '23.99px',
      'xl': '31.98px',
      '2xl': '42.63px',
      '3xl': '56.83px',
      '4xl': '75.76px',
    },
    extend: {
      colors: {
        light: '#F3F3F3',
        grey: '#908E96',
        dark: '#2C3333',
        blackout: '#131616',
        accent: {
          light: '#FF7373',
          DEFAULT: '#FF5D5D',
          dark: '#FF2A2A',
        },
      },
    },
  },
};

