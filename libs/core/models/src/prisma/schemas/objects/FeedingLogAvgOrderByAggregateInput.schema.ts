import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  duration: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional()
}).strict();
export const FeedingLogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FeedingLogAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogAvgOrderByAggregateInput>;
export const FeedingLogAvgOrderByAggregateInputObjectZodSchema = makeSchema();
