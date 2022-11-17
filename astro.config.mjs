import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import unocss from 'unocss/astro';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    unocss({
      theme: {
        fontFamily: {
          sans: ['"Nacelle"', '"Roboto"', '"Arial"', 'sans-serif'],
          mono: ['JetBrains Mono'],
        },
        fontSize: {
          'sm': '0.812rem',
          'lg': '1.25rem',
          'xl': '1.562rem',
          '2xl': '1.938rem',
          '3xl': '2.438rem',
          '4xl': '3.062rem',
          '5xl': '3.812rem',
          '6xl': '4.750rem',
          '7xl': '5.938rem',
        },
        colors: {
          surface: {
            DEFAULT: '#FDFCFD',
            dark: '#F4F2F4',
            darker: '#EEEDEF',
          },
          content: {
            light: '#7E7D86',
            DEFAULT: '#504F57',
            dark: '#34343A',
          },
          accent: {
            light: '#5D7CE9',
            DEFAULT: '#4164E5',
            dark: '#1E48DF',
          }
        },
      }
    })
  ],
});
