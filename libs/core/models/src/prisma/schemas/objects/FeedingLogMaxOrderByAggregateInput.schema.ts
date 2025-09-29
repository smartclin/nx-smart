import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  duration: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  breast: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional()
}).strict();
export const FeedingLogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FeedingLogMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogMaxOrderByAggregateInput>;
export const FeedingLogMaxOrderByAggregateInputObjectZodSchema = makeSchema();
