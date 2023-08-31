import { defineCollection, z } from "astro:content";

export const newsletterSchema = defineCollection({
   type: 'content',
   schema: z.object({
     title: z.string(),
     tags: z.array(z.string()),
     image: z.string().optional(),
   }),
 });