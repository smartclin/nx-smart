import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  billId: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  appointmentId: z.literal(true).optional(),
  billDate: z.literal(true).optional(),
  paymentDate: z.literal(true).optional(),
  discount: z.literal(true).optional(),
  totalAmount: z.literal(true).optional(),
  amountPaid: z.literal(true).optional(),
  paymentMethod: z.literal(true).optional(),
  status: z.literal(true).optional(),
  receiptNumber: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PaymentCountAggregateInputObjectSchema: z.ZodType<Prisma.PaymentCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCountAggregateInputType>;
export const PaymentCountAggregateInputObjectZodSchema = makeSchema();
