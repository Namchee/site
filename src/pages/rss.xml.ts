import type { APIContext } from 'astro';

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export function GET(context: APIContext) {
  const posts = getCollection('posts');

  return rss({
    title: 'Namchee\'s Blog',
    description: 'Food for thoughts or just Namchee\'s passing whims in form of writings',
    site: context.site,
    items: [],
  });
}
