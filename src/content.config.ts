import { defineCollection } from 'astro:content';
import type { SchemaContext } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    seniority: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    summary: z.string(),
    highlights: z.array(z.string()),
    tech: z.array(z.string()),
    order: z.number(),
  }),
});

/** Shared shape for projects and experiments. */
const showcaseSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    highlights: z.array(z.string()).default([]),
    tech: z.array(z.string()),
    links: z.array(z.object({ label: z.string(), url: z.url() })),
    image: image().optional(),
    order: z.number(),
  });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: showcaseSchema,
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experiments' }),
  schema: showcaseSchema,
});

export const collections = { experience, projects, experiments };
