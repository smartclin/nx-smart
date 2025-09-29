import { z } from 'zod';

export const PaymentMethodSchema = z.enum(['CASH', 'CARD', 'MOBILE'])

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;