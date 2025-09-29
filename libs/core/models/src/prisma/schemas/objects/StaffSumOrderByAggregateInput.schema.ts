import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  salary: SortOrderSchema.optional()
}).strict();
export const StaffSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StaffSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffSumOrderByAggregateInput>;
export const StaffSumOrderByAggregateInputObjectZodSchema = makeSchema();
