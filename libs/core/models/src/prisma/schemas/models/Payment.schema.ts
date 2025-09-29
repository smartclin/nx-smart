import { z } from 'zod';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';

export const PaymentSchema = z.object({
  id: z.number().int(),
  billId: z.number().int().nullish(),
  patientId: z.string(),
  appointmentId: z.number().int(),
  billDate: z.date(),
  paymentDate: z.date(),
  discount: z.number(),
  totalAmount: z.number(),
  amountPaid: z.number(),
  paymentMethod: PaymentMethodSchema.default("CASH"),
  status: PaymentStatusSchema.default("UNPAID"),
  receiptNumber: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PaymentType = z.infer<typeof PaymentSchema>;
