import { z } from 'zod';

// prettier-ignore
export const VitalSignsInputSchema = z.object({
    id: z.string(),
    encounterId: z.string().optional().nullable(),
    encounter: z.unknown().optional().nullable(),
    patientId: z.string(),
    medicalId: z.number().int(),
    medical: z.unknown(),
    height: z.number().optional().nullable(),
    weight: z.number().optional().nullable(),
    temperature: z.number().optional().nullable(),
    systolic: z.number().int().optional().nullable(),
    diastolic: z.number().int().optional().nullable(),
    heartRate: z.number().int().optional().nullable(),
    respiratoryRate: z.number().int().optional().nullable(),
    oxygenSaturation: z.number().int().optional().nullable(),
    recordedAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type VitalSignsInputType = z.infer<typeof VitalSignsInputSchema>;
