// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import unocss from 'unocss/astro';

import { transformerMetaHighlight } from '@shikijs/transformers';

import subfont from '@ernxst/subfont/astro';

import { remarkPlugins } from './src/plugins/remark';
import { rehypePlugins } from './src/plugins/rehype';

import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    unocss({
      injectReset: true,
    }),
    mdx(),

    sitemap(),
    robotsTxt(),
    subfont(),
  ],
  markdown: {
    remarkPlugins: remarkPlugins,
    rehypePlugins: rehypePlugins,
    shikiConfig: {
      transformers: [
        transformerMetaHighlight(),
        {
         pre(hast) {
            hast.properties['data-meta'] = this.options.meta?.__raw;
            hast.properties['data-code'] = this.source;
          }
        },
      ],
      themes: {
        light: 'kanagawa-lotus',
        dark: 'kanagawa-wave',
      },
    },
    syntaxHighlight: {
      excludeLangs: ['math', 'mermaid'],
    },
  },
  image: {
    domains: ['books.google.com', 'assets.literal.club', 'res.cloudinary.com'],
  },
  site: 'https://www.namchee.dev',
  prefetch: true,
  vite: {
    plugins: [
      Icons({
        compiler: 'vue3',
      })
    ]
  }
});
