import { z } from 'zod';

// prettier-ignore
export const DiagnosisInputSchema = z.object({
    id: z.number().int(),
    patientId: z.string(),
    medicalId: z.number().int(),
    doctorId: z.string(),
    doctor: z.unknown(),
    symptoms: z.string(),
    diagnosis: z.string(),
    notes: z.string().optional().nullable(),
    prescribedMedications: z.string().optional().nullable(),
    followUpPlan: z.string().optional().nullable(),
    medical: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DiagnosisInputType = z.infer<typeof DiagnosisInputSchema>;
