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
      sans: ['"Pretendard"', 'system-ui'],
      mono: ['"JetBrains Mono"', 'ui-monospace'],
    },
    fontSize: {
      xs: ['10.24px', '1.125'],
      sm: ['12.8px', '1.125'],
      base: ['16px', '1.5'],
      lg: ['20px', '1.5'],
      xl: ['25px', '1.5'],
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
