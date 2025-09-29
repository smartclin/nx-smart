import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  amountPaid: SortOrderSchema.optional(),
  receiptNumber: SortOrderSchema.optional()
}).strict();
export const PaymentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PaymentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentSumOrderByAggregateInput>;
export const PaymentSumOrderByAggregateInputObjectZodSchema = makeSchema();
