import { defineCollection, z } from 'astro:content';

// Helper to convert any date format to string
const toDateString = (val) => {
  if (!val) return undefined;
  if (val instanceof Date) {
    return val.toISOString().split('T')[0];
  }
  if (typeof val === 'object' && val.toString) {
    const str = val.toString();
    if (str.includes('T')) {
      return str.split('T')[0];
    }
    return str;
  }
  if (typeof val === 'string') {
    if (val.includes('T')) {
      return val.split('T')[0];
    }
    return val;
  }
  return String(val);
};

const topics = defineCollection({
  schema: z.object({
    title: z.string(),
    faculty: z.string(),
    department: z.string(),
    level: z.string().optional(),
    keywords: z.string().optional(),
    abstract: z.string(),
    date: z.union([z.string(), z.date(), z.any()]).optional().transform(toDateString),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date(), z.any()]).optional().transform(toDateString),
    category: z.string().optional(),
    image: z.string().optional(),
    excerpt: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { topics, blog };