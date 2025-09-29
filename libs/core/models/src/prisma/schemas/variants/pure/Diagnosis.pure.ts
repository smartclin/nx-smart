import { z } from 'zod';

// prettier-ignore
export const DiagnosisModelSchema = z.object({
    id: z.number().int(),
    patientId: z.string(),
    medicalId: z.number().int(),
    doctorId: z.string(),
    doctor: z.unknown(),
    symptoms: z.string(),
    diagnosis: z.string(),
    notes: z.string().nullable(),
    prescribedMedications: z.string().nullable(),
    followUpPlan: z.string().nullable(),
    medical: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DiagnosisModelType = z.infer<typeof DiagnosisModelSchema>;
