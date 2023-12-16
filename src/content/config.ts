import { z, defineCollection, reference } from 'astro:content';

const post = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: reference('image'),
    tags: z.array(z.string()),
    updatedAt: z.date(),
    isDraft: z.boolean().optional().default(false),
    relatedPosts: z.array(reference('post')).optional(),
  }),
});

const image = defineCollection({
  schema: z.object({
    url: z.string(),
    author: z.string(),
  })
});

export const collections = { post, image };
