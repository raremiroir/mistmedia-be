import { defineCollection, reference, z } from "astro:content";

export const blogSchema = defineCollection({
  type: 'content',
  schema: z.object({
    isDraft: z.boolean(),
    sortOrder: z.number().optional(),
  
    id: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    
    publishDate: z.string().transform((str) => new Date(str)),
    author: reference('authors').default('miro-storm'),
    language: z.enum(['en','nl']).default('nl'),
     
    footnote: z.string().optional(),
    tags: z.array(z.string()),
    relatedPosts: z.array(reference('blog')).optional(),

    canonicalUrl: z.string().url().optional(),
  }),
});