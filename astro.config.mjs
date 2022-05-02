import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import unocss from 'unocss/vite';
import preset from '@unocss/preset-uno';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
    plugins: [
      svgVue(),
      unocss({
        presets: [
          preset(),
        ],
        theme: {
          fontFamily: {
            mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
            sans: ['Open Sauce One', 'Inter', 'Segoe UI', 'Roboto', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif'],
          },
          fontSize: {
            sm: '13.5px',
            base: '18px',
            lg: '20px',
            xl: '24px',
            '2xl': '32px',
            '3xl': '42.63px',
            '4xl': '56.83px',
            '5xl': '75.76px',
            '6xl': '101px',
          },
          colors: {
            dark: '#222222',
            light: '#F6F6F6',
            gray: '#6F6F6F',
            peach: {
              200: '#FE7E6D',
              400: '#FE4F38',
            },
          },
        },
      }),
    ],
  },
});
