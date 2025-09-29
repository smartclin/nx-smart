import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  serviceDate: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  unitCost: SortOrderSchema.optional(),
  totalCost: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const PatientBillsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PatientBillsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsMinOrderByAggregateInput>;
export const PatientBillsMinOrderByAggregateInputObjectZodSchema = makeSchema();
