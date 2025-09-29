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
  updatedAt: z.literal(true).optional()
}).strict();
export const PaymentMaxAggregateInputObjectSchema: z.ZodType<Prisma.PaymentMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PaymentMaxAggregateInputType>;
export const PaymentMaxAggregateInputObjectZodSchema = makeSchema();
