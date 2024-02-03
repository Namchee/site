import { defineConfig } from 'astro/config';

import unocss from 'unocss/astro';

import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

import { imageService } from '@unpic/astro/service';

import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

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
  ],
  markdown: {
    remarkPlugins: remarkPlugins,
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'vitesse-dark' },
  },
  image: {
    service: imageService({
      placeholder: 'lqip',
    }),
    domains: ['assets.literal.club', 'res.cloudinary'],
  },
  site: 'https://www.namchee.dev',
  prefetch: true,
});
