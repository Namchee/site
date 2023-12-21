import { defineConfig } from 'unocss';

// eslint-disable-next-line canonical/no-unused-exports
export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['"Nacelle"', '"Roboto"', '"Arial"', 'sans-serif'],
      mono: ['JetBrains Mono'],
    },
    colors: {
      background: 'oklch(var(--background))',
      surface: 'oklch(var(--surface))',
      border: 'oklch(var(--border))',

      heading: 'oklch(var(--heading))',
      content: 'oklch(var(--content))',
      accent: 'oklch(var(--accent))',

      primary: 'oklch(var(--primary))',

      success: 'oklch(var(--success))',
    },
  },
});
