import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  date: z.literal(true).optional(),
  type: z.literal(true).optional(),
  duration: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  breast: z.literal(true).optional(),
  notes: z.literal(true).optional()
}).strict();
export const FeedingLogMinAggregateInputObjectSchema: z.ZodType<Prisma.FeedingLogMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogMinAggregateInputType>;
export const FeedingLogMinAggregateInputObjectZodSchema = makeSchema();
