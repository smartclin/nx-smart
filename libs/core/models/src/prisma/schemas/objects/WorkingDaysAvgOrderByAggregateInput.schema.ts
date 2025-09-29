import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const WorkingDaysAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkingDaysAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysAvgOrderByAggregateInput>;
export const WorkingDaysAvgOrderByAggregateInputObjectZodSchema = makeSchema();
