import { defineConfig, presetWind4, transformerCompileClass } from 'unocss';

export default defineConfig({
  theme: {
    breakpoint: {
      'sm': '400px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    font: {
      sans: '"Inter", system-ui',
      mono: '"JetBrains Mono", ui-monospace',
      serif: 'Georgia, Garamond, Times New Roman',
    },
    colors: {
      'heading': 'var(--heading)',
      'content': 'var(--content)',

      'background': 'var(--background)',

      'surface-1': 'var(--surface-1)',
      'surface-2': 'var(--surface-2)',
      'surface-3': 'var(--surface-3)',

      'separator': 'var(--separator)',

      'accent': 'var(--accent)',

      'success': 'var(--success)',
      'warning': 'var(--warning)',
      'danger': 'var(--danger)',
    },
  },
  presets: [
    presetWind4(),
  ],
  transformers: [
    transformerCompileClass(),
  ],
});
