// Define collection(s)
import { blogSchema } from './blog/schema';
import { newsletterSchema } from './newsletter/schema';
import { authorsSchema } from './authors/schema';
import { portfolioSchema } from './portfolio/schema';
import { clientsSchema } from './clients/schema';

// Export  single `collections` object to register collection(s)
// key should match collection directory name in "src/content"
export const collections = {
  'blog': blogSchema,
  'newsletter': newsletterSchema,
  'authors': authorsSchema,
  'portfolio': portfolioSchema,
  'clients': clientsSchema,
};