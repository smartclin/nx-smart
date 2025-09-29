import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  insurance: SortOrderSchema.optional(),
  insuranceId: SortOrderSchema.optional(),
  serviceDate: SortOrderSchema.optional(),
  dueDate: SortOrderSchema.optional(),
  paidDate: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BillingMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BillingMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingMinOrderByAggregateInput>;
export const BillingMinOrderByAggregateInputObjectZodSchema = makeSchema();
