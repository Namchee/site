const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
  theme: {
    fontFamily: {
      sans: ['Open Sauce One', 'Inter', ...defaultTheme.fontFamily.sans],
      mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'lg': '1.25rem',
      'xl': '1.563rem',
      '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '3.052rem',
      '5xl': '3.815rem',
      '6xl': '4.768rem',
      '7xl': '5.96rem',
    },
    extend: {
      colors: {
        light: '#F3F0F0',
        grey: '#86848D',
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

