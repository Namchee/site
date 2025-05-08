import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  loader: glob({ pattern: ['*.md'], base: 'src/content/posts' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()),
    publishedAt: z.date(),
    isDraft: z.boolean().optional().default(false),
  }),
});

export const collections = { posts };
