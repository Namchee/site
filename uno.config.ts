import { defineConfig, transformerCompileClass } from 'unocss';

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
      'background': 'oklch(var(--background))',
      'surface': 'oklch(var(--surface))',
      'pressurized': 'oklch(var(--pressurized))',

      'separator': 'oklch(var(--separator))',

      'heading': 'oklch(var(--heading))',
      'content': 'oklch(var(--content))',

      'primary': 'oklch(var(--primary))',

      'success': 'oklch(var(--success))',

      'navigation-background': 'oklch(var(--navigation-background))',
      'navigation-border': 'oklch(var(--navigation-border))',
      'navigation-accent': 'oklch(var(--navigation-accent))',

      'accent': 'oklch(var(--accent))'
    },
  },
  transformers: [
    transformerCompileClass(),
  ],
});
