import { defineCollection, reference, z } from "astro:content";

export const portfolioSchema = defineCollection({
   type: 'content',
   schema: z.object({
      title: z.string(),
      text: z.object({
          nl: z.string(),
          en: z.string(),
      }),
      published_on: z.date(),
      cover_image: z.url(),
      client: reference('clients'),
      href: z.string().url(),
      solution: z.string(),
      gallery: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      enabled: z.boolean().default(true),
      featured: z.boolean().default(false),
   }),
 });