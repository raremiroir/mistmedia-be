// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
import { blogSchema } from './blog/schema';
import { newsletterSchema } from './newsletter/schema';
import { authorsSchema } from './authors/schema';
import { portfolioSchema } from '../layouts/schema';
import { clientsSchema } from './clients/schema';

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogSchema,
  'newsletter': newsletterSchema,
  'authors': authorsSchema,
  'portfolio': portfolioSchema,
  'clients': clientsSchema,
};