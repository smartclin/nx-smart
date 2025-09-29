import { z } from 'zod';

export const BillingStatusSchema = z.enum(['PENDING', 'PAID', 'INSURANCE_PENDING', 'DENIED'])

export type BillingStatus = z.infer<typeof BillingStatusSchema>;