import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  billDate: SortOrderSchema.optional(),
  paymentDate: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  amountPaid: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  receiptNumber: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const PaymentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PaymentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCountOrderByAggregateInput>;
export const PaymentCountOrderByAggregateInputObjectZodSchema = makeSchema();
