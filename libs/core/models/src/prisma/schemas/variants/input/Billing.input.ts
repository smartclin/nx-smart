import { z } from 'zod';

import { BillingStatusSchema } from '../../enums/BillingStatus.schema';
// prettier-ignore
export const BillingInputSchema = z.object({
    id: z.string(),
    patientId: z.string(),
    patient: z.unknown(),
    appointmentId: z.number().int().optional().nullable(),
    appointment: z.unknown().optional().nullable(),
    amount: z.number(),
    status: BillingStatusSchema,
    insurance: z.string().optional().nullable(),
    insuranceId: z.string().optional().nullable(),
    serviceDate: z.date(),
    dueDate: z.date(),
    paidDate: z.date().optional().nullable(),
    notes: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BillingInputType = z.infer<typeof BillingInputSchema>;
