import { defineCollection, reference, z } from "astro:content";

export const portfolioSchema = defineCollection({
   type: 'content',
   schema: ({ image }) => z.object({
      title: z.string(),
      text: z.object({
          nl: z.string(),
          en: z.string(),
      }),
      published_on: z.date(),
      cover_image: image().refine((img) => img.width >= 1000, {
            message: 'cover image must be at least 1000px wide'
      }),
      client: reference('clients'),
      href: z.string().url(),
      solution: z.string(),
      gallery: z.array(
         image().refine((img) => img.width >= 400, {
            message: 'cover image must be at least 400px wide'
      })).optional(),
      tags: z.array(z.string()).optional(),
      enabled: z.boolean().default(true),
      featured: z.boolean().default(false),
   }),
});