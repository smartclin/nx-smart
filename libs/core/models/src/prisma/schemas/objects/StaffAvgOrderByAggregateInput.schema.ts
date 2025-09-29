import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  salary: SortOrderSchema.optional()
}).strict();
export const StaffAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StaffAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffAvgOrderByAggregateInput>;
export const StaffAvgOrderByAggregateInputObjectZodSchema = makeSchema();
