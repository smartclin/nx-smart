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
export const PaymentAvgAggregateInputObjectSchema: z.ZodType<Prisma.PaymentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PaymentAvgAggregateInputType>;
export const PaymentAvgAggregateInputObjectZodSchema = makeSchema();
