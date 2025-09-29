import { z } from 'zod';

// prettier-ignore
export const VitalSignsResultSchema = z.object({
    id: z.string(),
    encounterId: z.string().nullable(),
    encounter: z.unknown().nullable(),
    patientId: z.string(),
    medicalId: z.number().int(),
    medical: z.unknown(),
    height: z.number().nullable(),
    weight: z.number().nullable(),
    temperature: z.number().nullable(),
    systolic: z.number().int().nullable(),
    diastolic: z.number().int().nullable(),
    heartRate: z.number().int().nullable(),
    respiratoryRate: z.number().int().nullable(),
    oxygenSaturation: z.number().int().nullable(),
    recordedAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type VitalSignsResultType = z.infer<typeof VitalSignsResultSchema>;
