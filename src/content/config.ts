import { defineCollection, z } from 'astro:content';

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    tags: z.array(z.string()),
    url: z.string().min(1),
    category: z.string().min(1),
    image: z.string().min(1),
  }),
});

export const collections = {
  tools: toolsCollection,
};