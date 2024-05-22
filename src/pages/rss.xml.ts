import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

import rss from '@astrojs/rss';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');

  return rss({
    title: 'Namchee\'s Blog',
    description: 'Food for thoughts or just Namchee\'s passing whims in form of writings',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.subtitle,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
