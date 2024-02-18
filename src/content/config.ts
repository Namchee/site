import { z, defineCollection, reference } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.object({
      url: z.string(),
      author: z.string(),
      source: z.string().optional(),
    }),
    tags: z.array(z.string()),
    publishedAt: z.date(),
    isDraft: z.boolean().optional().default(false),
    relatedPosts: z.array(reference('posts')).optional(),
  }),
});

export const collections = { posts };
