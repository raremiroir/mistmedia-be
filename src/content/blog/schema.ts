import { defineCollection, reference, z } from "astro:content";

export const blogSchema = defineCollection({
  type: 'content',
  schema: z.object({
    isDraft: z.boolean(),
    sortOrder: z.number().optional(),

    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    
    publishDate: z.string().transform((str) => new Date(str)),
    author: reference('authors').default('miro-storm'),
    language: z.enum(['en','nl']).default('nl'),
     
    footnote: z.string().optional(),
    tags: z.array(z.string()).optional(),
    relatedPosts: z.array(reference('blog')).optional(),

    canonicalUrl: z.string().url().optional(),
  }),
});

export interface BlogPost {
  isDraft: boolean;
  sortOrder?: number;
  title: string;
  description: string;
  image?: string;
  publishDate: Date;
  author: string;
  language: 'en' | 'nl';
  footnote?: string;
  tags?: string[];
  relatedPosts?: string[];
  canonicalUrl?: string;
}

export interface BlogPostFrontmatter {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: BlogPost;
  render: any;
}