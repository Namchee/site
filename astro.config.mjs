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
          background: {
            DEFAULT: '#FCFCFC',
          },
          surface: {
            DEFAULT: '#F0F0F0',
          },
          outline: {
            DEFAULT: '#DBDBDB',
          },
          content: {
            DEFAULT: '#232323',
            variant: '#6F6F6F',
          },
          primary: {
            DEFAULT: '#3A5CCC',
            variant: '#193CBA',
          },
          red: '#E5484D',
          green: '#46A758',
        },
      },
    }),
  ],
});
