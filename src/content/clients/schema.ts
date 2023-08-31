import { defineCollection, reference, z } from "astro:content";

export const clientsSchema = defineCollection({
   type: 'content',
   schema: z.object({
      id: z.string(),
      name: z.string(),
      description: z.object({
         nl: z.string(),
         en: z.string().optional(),
      }),
      client_since: z.date(),
      logo: z.string(),
      cover_image: z.string().optional(),
      site: z.string().url().optional(),
      portfolio: z.array(reference('portfolio')).optional(),
   }),
 });