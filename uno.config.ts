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
    text: {
      '2xl': {
        fontSize: '36px',
        lineHeight: '44px',
        letterSpacing: '-0.02em',
      },
      'xl': {
        fontSize: '24px',
        lineHeight: '32px',
        letterSpacing: '-0.01em',
      },
      lg: {
        fontSize: '18px',
        lineHeight: '28px',
      },
      'base': {
        fontSize: '16px',
        lineHeight: '1.75',
      },
      sm: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      xs: {
        fontSize: '12px',
        lineHeight: '20px',
      },
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
    presetWind4({
      preflights: {
        reset: true,
      },
    })
  ],
  transformers: [
    transformerCompileClass(),
  ],
});
