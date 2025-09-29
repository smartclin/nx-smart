import { z } from 'zod';

// prettier-ignore
export const ImmunizationInputSchema = z.object({
    id: z.string(),
    patientId: z.string(),
    patient: z.unknown(),
    vaccine: z.string(),
    date: z.date(),
    dose: z.string().optional().nullable(),
    lotNumber: z.string().optional().nullable(),
    administeredByStaffId: z.string().optional().nullable(),
    administeredBy: z.unknown().optional().nullable(),
    notes: z.string().optional().nullable(),
    createdAt: z.date()
}).strict();

export type ImmunizationInputType = z.infer<typeof ImmunizationInputSchema>;
