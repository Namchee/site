const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      sans: ['Open Sauce', 'Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: '13.5px',
      base: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '42.63px',
      '4xl': '56.83px',
      '5xl': '75.76px',
      '6xl': '101px',
    },
    extend: {
      colors: {
        dark: '#222222',
        light: '#F6F6F6',
        gray: '#6F6F6F',
        peach: {
          200: '#FE7E6D',
          400: '#FE4F38',
        },
      },
    },
  },
};
