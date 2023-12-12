import { defineConfig } from 'unocss';

// eslint-disable-next-line canonical/no-unused-exports
export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['"Nacelle"', '"Roboto"', '"Arial"', 'sans-serif'],
      mono: ['JetBrains Mono'],
    },
    fontSize: {
      'xs': ['0.75rem', '1.5'],
      'sm': ['0.875rem', '1.5'],
      'base': ['1rem', '1.5'],
      'lg': ['1.25rem', '1.5'],
      'xl': ['1.5rem', '1.5'],
      '2xl': ['1.875rem', '1.25'],
      '3xl': ['2.25rem', '1.25'],
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
});
