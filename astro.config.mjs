import { defineConfig } from 'astro/config';

import unocss from 'unocss/astro';

import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    vue(),
    unocss({
      injectReset: true,
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
    }),
  ],
  image: {
    domains: ['assets.literal.club', 'res.cloudinary'],
  },
  site: 'https://www.namchee.dev',
});
