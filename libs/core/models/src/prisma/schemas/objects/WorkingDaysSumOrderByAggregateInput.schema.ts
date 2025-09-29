import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const WorkingDaysSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkingDaysSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysSumOrderByAggregateInput>;
export const WorkingDaysSumOrderByAggregateInputObjectZodSchema = makeSchema();
