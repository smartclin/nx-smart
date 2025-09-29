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
export const WorkingDaysCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkingDaysCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysCountOrderByAggregateInput>;
export const WorkingDaysCountOrderByAggregateInputObjectZodSchema = makeSchema();
