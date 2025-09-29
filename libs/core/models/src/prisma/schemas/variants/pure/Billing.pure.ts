import { z } from 'zod';

import { BillingStatusSchema } from '../../enums/BillingStatus.schema';
// prettier-ignore
export const BillingModelSchema = z.object({
    id: z.string(),
    patientId: z.string(),
    patient: z.unknown(),
    appointmentId: z.number().int().nullable(),
    appointment: z.unknown().nullable(),
    amount: z.number(),
    status: BillingStatusSchema,
    insurance: z.string().nullable(),
    insuranceId: z.string().nullable(),
    serviceDate: z.date(),
    dueDate: z.date(),
    paidDate: z.date().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BillingModelType = z.infer<typeof BillingModelSchema>;
