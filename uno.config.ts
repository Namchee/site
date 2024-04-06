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
      xs: ['12px', '1.125'],
      sm: ['14px', '1.25'],
      base: ['16px', '1.5'],
      lg: ['20px', '1.75'],
      xl: ['24px', '1.875'],
    },
    colors: {
      background: 'oklch(var(--background))',
      surface: 'oklch(var(--surface))',
      separator: 'oklch(var(--separator))',

      heading: 'oklch(var(--heading))',
      content: 'oklch(var(--content))',

      primary: 'oklch(var(--primary))',

      success: 'oklch(var(--success))',
    },
  },
});
