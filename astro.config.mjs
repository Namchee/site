import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';
import robotsTxt from 'astro-robots-txt';

import unocss from 'unocss/astro';

import rehypeMathjax from 'rehype-mathjax';

import { subset } from '@namchee/astro-subfont';

import { remarkPlugins } from './src/plugins/remark';


// https://astro.build/config
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
    rehypePlugins: [rehypeMathjax],
    syntaxHighlight: false,
  },
  image: {
    domains: ['assets.literal.club', 'res.cloudinary.com'],
  },
  site: 'https://www.namchee.dev',
  prefetch: true,
});
