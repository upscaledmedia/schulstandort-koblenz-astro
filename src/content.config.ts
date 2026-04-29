import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    excerpt: z.string().max(280).optional(),
    category: z.enum(['Pressemitteilung', 'Update', 'Stellungnahme', 'Veranstaltung', 'Termin']),
    featured: z.boolean().default(false),
    author: z.string().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const termine = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/termine' }),
  schema: z.object({
    title: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date().optional(),
    location: z.string().optional(),
    eventType: z.enum([
      'Stadtratssitzung',
      'Ausschusssitzung',
      'Informationsveranstaltung',
      'Petitionsabgabe',
      'Sonstiges',
    ]),
    status: z.enum(['geplant', 'erfolgt', 'verschoben', 'abgesagt']).default('geplant'),
    importance: z.enum(['low', 'medium', 'high']).default('medium'),
    linkLabel: z.string().optional(),
    linkUrl: z.string().url().optional(),
  }),
});

const stimmen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stimmen' }),
  schema: z.object({
    quote: z.string(),
    source: z.string(),
    sourceType: z.enum([
      'Stadt-Dokument',
      'Politiker-Aussage',
      'Bürgerstimme',
      'Experte',
      'Medienzitat',
    ]).default('Stadt-Dokument'),
    sourceUrl: z.string().url().optional(),
    displayOrder: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

const dokumente = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dokumente' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    file: z.string(),
    documentType: z.enum([
      'Originaldokument Stadt',
      'Pressemitteilung',
      'Musterbrief',
      'Auswertung',
      'Sonstiges',
    ]),
    originalSource: z.string().optional(),
    originalDate: z.coerce.date().optional(),
    displayOrder: z.number().default(100),
  }),
});

export const collections = { news, termine, stimmen, dokumente };
