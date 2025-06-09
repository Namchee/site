import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';
import robotsTxt from 'astro-robots-txt';

import unocss from 'unocss/astro';

import { transformerMetaHighlight } from '@shikijs/transformers';

import { subset } from '@namchee/astro-subfont';

import { remarkPlugins } from './src/plugins/remark';
import { rehypePlugins } from './src/plugins/rehype';

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
        simpleIcons: ['github', 'linkedin', 'bluesky', 'x'],
        lucide: ['*'],
      },
    }),
    sitemap(),
    robotsTxt(),
    subset(),
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
        light: 'one-light',
        dark: 'tokyo-night',
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
});
