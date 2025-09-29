import { z } from 'zod';

export const PaymentStatusSchema = z.enum(['PAID', 'UNPAID', 'PARTIAL', 'REFUNDED'])

export type PaymentStatus = z.infer<typeof PaymentStatusSchema>;