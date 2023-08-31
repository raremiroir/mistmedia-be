import { defineCollection, reference, z } from "astro:content";

export const portfolioSchema = defineCollection({
   type: 'content',
   schema: z.object({
      id: z.string(),
      title: z.string(),
      text: z.object({
         nl: z.string(),
         en: z.string().optional(),
      }),
      cover_image: z.string(),
      client: reference('clients'),
      href: z.string().url().optional(),
      solution: z.string(),
      gallery: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      enabled: z.boolean(),
      featured: z.boolean(),
   }),
});