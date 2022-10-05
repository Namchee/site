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
          sans: ['"Nacelle"', '"Roboto"', '"Arial"', 'sans-serif'],
          mono: ['JetBrains Mono'],
        },
        fontSize: {
          'sm': ['13.5px', {
            lineHeight: '18.9px',
            letterSpacing: '-0.0025em',
          }],
          'base': ['18px', {
            lineHeight: '25.2px',
            letterSpacing: '-0.014em',
          }],
          'lg': ['23.99px', {
            lineHeight: '33.6px',
            letterSpacing: '-0.019em',
          }],
          'xl': ['31.98px', {
            lineHeight: '44.8px',
            letterSpacing: '-0.0216em',
          }],
          '2xl': ['42.63px', {
            lineHeight: '59.682px',
            letterSpacing: '-0.0221em',
          }],
          '3xl': ['56.83px', {
            lineHeight: '79.562px',
            letterSpacing: '-0.222em',
          }],
          '4xl': ['75.76px', {
            lineHeight: '106.064px',
            letterSpacing: '-0.222em',
          }],
          '5xl': ['100.98px', {
            lineHeight: '141.372px',
            letterSpacing: '-0.222em',
          }],
        },
        colors: {
          surface: {
            DEFAULT: '#FDFCFD',
            dark: '#EEEDEF',
            darker: '#E4E2E4',
          },
          content: {
            DEFAULT: '#504F57',
            dark: '#34343A',
            light: '#7E7D86',
          },
          accent: {
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
