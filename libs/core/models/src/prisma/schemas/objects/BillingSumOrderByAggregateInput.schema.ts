import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  appointmentId: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional()
}).strict();
export const BillingSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BillingSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingSumOrderByAggregateInput>;
export const BillingSumOrderByAggregateInputObjectZodSchema = makeSchema();
