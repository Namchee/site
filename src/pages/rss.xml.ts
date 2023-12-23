import type { APIContext } from 'astro';

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');

  return rss({
    title: 'Namchee\'s Blog',
    description: 'Food for thoughts or just Namchee\'s passing whims in form of writings',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      image: post.data.image.url,
      pubDate: post.data.updatedAt,
      description: post.data.subtitle,
      link: `/posts/${post.slug}`,
    })),
  });
}
