import { z } from 'zod';

// prettier-ignore
export const EncounterInputSchema = z.object({
    id: z.string(),
    patientId: z.string(),
    patient: z.unknown(),
    doctorId: z.string(),
    doctor: z.unknown(),
    date: z.date(),
    type: z.string(),
    diagnosis: z.string().optional().nullable(),
    treatment: z.string().optional().nullable(),
    notes: z.string().optional().nullable(),
    medicalId: z.number().int(),
    medical: z.unknown(),
    vitalSigns: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type EncounterInputType = z.infer<typeof EncounterInputSchema>;
