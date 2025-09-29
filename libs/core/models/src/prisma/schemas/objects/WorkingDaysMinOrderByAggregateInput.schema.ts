import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  day: SortOrderSchema.optional(),
  startTime: SortOrderSchema.optional(),
  closeTime: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkingDaysMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkingDaysMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysMinOrderByAggregateInput>;
export const WorkingDaysMinOrderByAggregateInputObjectZodSchema = makeSchema();
