import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET({ site }: { site: string | URL }) {
  let posts = await getCollection('posts');

  if (import.meta.env.PROD) {
    posts = posts.filter(p => !p.id.startsWith('_'));
  }

  return rss({
    title: 'Namchee\'s Blog',
    description: 'Food for thoughts or just Namchee\'s passing whims in form of writings',
    site: site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.subtitle,
      link: `/posts/${post.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
