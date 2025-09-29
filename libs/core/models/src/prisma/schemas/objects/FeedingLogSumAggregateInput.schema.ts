import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  duration: z.literal(true).optional(),
  amount: z.literal(true).optional()
}).strict();
export const FeedingLogSumAggregateInputObjectSchema: z.ZodType<Prisma.FeedingLogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogSumAggregateInputType>;
export const FeedingLogSumAggregateInputObjectZodSchema = makeSchema();
