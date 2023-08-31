import { defineCollection, reference, z } from "astro:content";

export const authorsSchema = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    description: z.object({
        nl: z.string(),
        en: z.string().optional(),
    }),
    photo: z.string(),
    job_title: z.string().optional(),
    email: z.string().email(),
    socials: z.object({
        twitter: z.string().url().optional(),
        facebook: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        instagram: z.string().url().optional(),
        youtube: z.string().url().optional(),
        pinterest: z.string().url().optional(),
        github: z.string().url().optional(),
    }).optional(),
    portfolio: z.array(reference('portfolio')).optional(),
  }),
});