import { z } from 'zod';

// prettier-ignore
export const EncounterResultSchema = z.object({
    id: z.string(),
    patientId: z.string(),
    patient: z.unknown(),
    doctorId: z.string(),
    doctor: z.unknown(),
    date: z.date(),
    type: z.string(),
    diagnosis: z.string().nullable(),
    treatment: z.string().nullable(),
    notes: z.string().nullable(),
    medicalId: z.number().int(),
    medical: z.unknown(),
    vitalSigns: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type EncounterResultType = z.infer<typeof EncounterResultSchema>;
