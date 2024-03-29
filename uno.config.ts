import { defineConfig } from 'unocss';

// eslint-disable-next-line canonical/no-unused-exports
export default defineConfig({
  theme: {
    breakpoints: {
      'sm': '400px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['"Nacelle"', 'system-ui'],
      mono: ['"JetBrains Mono"', 'ui-monospace'],
    },
    colors: {
      background: 'oklch(var(--background))',
      surface: 'oklch(var(--surface))',
      separator: 'oklch(var(--separator))',

      heading: 'oklch(var(--heading))',
      content: 'oklch(var(--content))',
      accent: 'oklch(var(--accent))',

      primary: 'oklch(var(--primary))',

      success: 'oklch(var(--success))',
    },
  },
});
