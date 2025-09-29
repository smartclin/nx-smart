import { z } from 'zod';

// prettier-ignore
export const ImmunizationModelSchema = z.object({
    id: z.string(),
    patientId: z.string(),
    patient: z.unknown(),
    vaccine: z.string(),
    date: z.date(),
    dose: z.string().nullable(),
    lotNumber: z.string().nullable(),
    administeredByStaffId: z.string().nullable(),
    administeredBy: z.unknown().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date()
}).strict();

export type ImmunizationModelType = z.infer<typeof ImmunizationModelSchema>;
