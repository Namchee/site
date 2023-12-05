import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['"Nacelle"', '"Roboto"', '"Arial"', 'sans-serif'],
      mono: ['JetBrains Mono'],
    },
    fontSize: {
      'sm': '0.812rem',
      'lg': '1.25rem',
      'xl': '1.562rem',
      '2xl': '1.938rem',
      '3xl': '2.438rem',
      '4xl': '3.062rem',
      '5xl': '3.812rem',
      '6xl': '4.750rem',
      '7xl': '5.938rem',
    },
    colors: {
      background: 'oklch(--background)',
      surface: 'oklch(--surface)',
      border: 'oklch(--border)',


    },
  },
})
