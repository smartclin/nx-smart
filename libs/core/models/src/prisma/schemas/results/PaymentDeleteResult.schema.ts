import { z } from 'zod';
export const PaymentDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  billId: z.number().int().optional(),
  patientId: z.string(),
  appointmentId: z.number().int(),
  billDate: z.date(),
  paymentDate: z.date(),
  discount: z.number(),
  totalAmount: z.number(),
  amountPaid: z.number(),
  paymentMethod: z.unknown(),
  status: z.unknown(),
  receiptNumber: z.number().int(),
  appointment: z.unknown(),
  patient: z.unknown(),
  bills: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));