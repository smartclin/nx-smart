import { z } from 'zod';

export const FeedingTypeSchema = z.enum(['BREAST', 'FORMULA', 'MIXED'])

export type FeedingType = z.infer<typeof FeedingTypeSchema>;