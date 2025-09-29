import { z } from 'zod';
import { FeedingTypeSchema } from '../enums/FeedingType.schema';

export const FeedingLogSchema = z.object({
  id: z.string(),
  patientId: z.string(),
  date: z.date(),
  type: FeedingTypeSchema,
  duration: z.number().int().nullish(),
  amount: z.number().nullish(),
  breast: z.string().nullish(),
  notes: z.string().nullish(),
});

export type FeedingLogType = z.infer<typeof FeedingLogSchema>;
