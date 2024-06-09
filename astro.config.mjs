import { defineConfig } from 'astro/config';

import unocss from 'unocss/astro';

import icon from 'astro-icon';

import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import { subset } from '@namchee/astro-subfont';

import {
  transformerNotationHighlight,
} from '@shikijs/transformers';

import { remarkPlugins } from './src/plugins/remark';

export default defineConfig({
  integrations: [
    vue(),
    unocss({
      injectReset: true,
    }),
    mdx(),
    icon({
      include: {
        simpleIcons: ['*'],
        lucide: ['*'],
        cib: ['creative-commons-by'],
      },
    }),
    sitemap(),
    robotsTxt(),
    subset(),
  ],
  markdown: {
    remarkPlugins: remarkPlugins,
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [transformerNotationHighlight()],
    },
  },
  image: {
    domains: ['assets.literal.club', 'res.cloudinary.com'],
  },
  site: 'https://www.namchee.dev',
  prefetch: true,
});
