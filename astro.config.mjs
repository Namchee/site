import { defineConfig } from 'astro/config';

import icon from 'unplugin-icons/vite';

import unocss from '@unocss/astro';
import presetUno from '@unocss/preset-uno';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    unocss({
      presets: [
        presetUno(),
      ],
      theme: {
        fontFamily: {
          sans: ['Open Sauce One', 'Inter'],
          mono: ['JetBrains Mono'],
        },
        fontSize: {
          'sm': ['13.5px', 1.5],
          'base': ['18px', 1.5],
          'lg': ['23.99px', 1.5],
          'xl': ['31.98px', 1.5],
          '2xl': ['42.63px', 1.5],
          '3xl': ['56.83px', 1.5],
          '4xl': ['75.76px', 1.5],
          '5xl': ['100.98px', 1.5],
        },
        colors: {
          surface: {
            DEFAULT: '#F9F8F9',
            dark: '#EEEDEF',
          },
          content: {
            DEFAULT: '#504F57',
            dark: '#34343A',
            light: '#7E7D86',
          },
          primary: {
            DEFAULT: '#4164E5',
            dark: '#1E48DF',
          }
        },
      },
    }
  )],
  vite: {
    plugins: [
      icon(),
    ],
  },
});
