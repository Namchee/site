import { defineConfig } from 'unocss';

import transformerCompileClass from '@unocss/transformer-compile-class';

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
      sans: ['"Inter"', 'system-ui'],
      mono: ['"JetBrains Mono"', 'ui-monospace'],
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
  transformers: [
    transformerCompileClass(),
  ],
});
