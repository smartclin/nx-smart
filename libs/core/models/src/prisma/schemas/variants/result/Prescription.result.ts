import { z } from 'zod';

// prettier-ignore
export const PrescriptionResultSchema = z.object({
    id: z.number().int(),
    medicalRecordId: z.number().int(),
    doctorId: z.string().nullable(),
    patientId: z.string(),
    medicationName: z.string(),
    dosage: z.string(),
    frequency: z.string(),
    duration: z.string(),
    instructions: z.string().nullable(),
    issuedDate: z.date(),
    endDate: z.date().nullable(),
    status: z.string(),
    medicalRecord: z.unknown(),
    doctor: z.unknown().nullable(),
    patient: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PrescriptionResultType = z.infer<typeof PrescriptionResultSchema>;
