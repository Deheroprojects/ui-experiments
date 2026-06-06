import { defineCollection, z } from 'astro:content';

const topics = defineCollection({
  schema: z.object({
    title: z.string(),
    faculty: z.string(),
    department: z.string(),
    level: z.string().optional(),
    keywords: z.string().optional(),
    abstract: z.string(),
    date: z.date().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string().optional(),
    image: z.string().optional(),
    excerpt: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { topics, blog };