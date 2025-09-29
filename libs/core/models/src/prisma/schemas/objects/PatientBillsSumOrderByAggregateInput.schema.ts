import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  unitCost: SortOrderSchema.optional(),
  totalCost: SortOrderSchema.optional()
}).strict();
export const PatientBillsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PatientBillsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsSumOrderByAggregateInput>;
export const PatientBillsSumOrderByAggregateInputObjectZodSchema = makeSchema();
