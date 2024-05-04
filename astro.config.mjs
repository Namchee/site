import { defineConfig } from 'astro/config';

import unocss from 'unocss/astro';

import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import { subset } from '@namchee/astro-subfont';

import { remarkPlugins } from './src/plugins/remark';

export default defineConfig({
  integrations: [
    vue(),
    unocss({
      injectReset: true,
    }),
    mdx(),
    sitemap(),
    robotsTxt(),
    subset(),
  ],
  markdown: {
    remarkPlugins: remarkPlugins,
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'vitesse-dark' },
  },
  image: {
    domains: ['assets.literal.club', 'res.cloudinary.com'],
  },
  site: 'https://www.namchee.dev',
  prefetch: true,
});
