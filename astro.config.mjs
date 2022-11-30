import { defineConfig } from 'astro/config';

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
            DEFAULT: '#F9F8F9',
            dark: '#E9E8EA',
          },
          content: {
            light: '#504f57',
            DEFAULT: '#34343A',
            dark: '#28282C',
          },
          accent: {
            light: '#5D7CE9',
            DEFAULT: '#4164E5',
            dark: '#1E48DF',
          },
          red: '#E5484D',
        },
      }
    })
  ],
});
