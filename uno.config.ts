import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['"Nacelle"', '"Roboto"', '"Arial"', 'sans-serif'],
      mono: ['JetBrains Mono'],
    },
    fontSize: {
      'sm': ['0.812rem', '1.5'],
      'base': ['1rem', '1.5'],
      'lg': ['1.25rem', '1.5'],
      'xl': ['1.562rem', '1.25'],
      '2xl': ['1.938rem', '1.25'],
      '3xl': ['2.438rem', '1.25'],
    },
    colors: {
      background: 'oklch(var(--background))',
      surface: 'oklch(var(--surface))',
      border: 'oklch(var(--border))',

      heading: 'oklch(var(--heading))',
      content: 'oklch(var(--content))',
      link: 'oklch(var(--link))',

      accent: 'oklch(var(--accent))',

      success: 'oklch(var(--success))',
    },
  },
})
