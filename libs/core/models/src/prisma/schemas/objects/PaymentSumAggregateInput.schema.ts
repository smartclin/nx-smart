import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  billId: z.literal(true).optional(),
  appointmentId: z.literal(true).optional(),
  discount: z.literal(true).optional(),
  totalAmount: z.literal(true).optional(),
  amountPaid: z.literal(true).optional(),
  receiptNumber: z.literal(true).optional()
}).strict();
export const PaymentSumAggregateInputObjectSchema: z.ZodType<Prisma.PaymentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PaymentSumAggregateInputType>;
export const PaymentSumAggregateInputObjectZodSchema = makeSchema();
