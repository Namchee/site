import { defineConfig } from 'astro/config';

import unocss from 'unocss/astro';

import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

import remarkToc from 'remark-toc';

export default defineConfig({
  integrations: [
    vue(),
    unocss({
      injectReset: true,
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'vitesse-dark' },
      remarkPlugins: [remarkToc()],
    }),
  ],
  image: {
    domains: ['assets.literal.club', 'res.cloudinary'],
  },
  site: 'https://www.namchee.dev',
});
