import { z } from 'zod';

// prettier-ignore
export const MedicalRecordsInputSchema = z.object({
    id: z.number().int(),
    patientId: z.string(),
    appointmentId: z.number().int(),
    doctorId: z.string(),
    treatmentPlan: z.string().optional().nullable(),
    prescriptions: z.string().optional().nullable(),
    labRequest: z.string().optional().nullable(),
    notes: z.string().optional().nullable(),
    appointment: z.unknown(),
    patient: z.unknown(),
    doctor: z.unknown(),
    labTests: z.array(z.unknown()),
    encounters: z.array(z.unknown()),
    diagnoses: z.array(z.unknown()),
    prescriptionsList: z.array(z.unknown()),
    vitalSigns: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MedicalRecordsInputType = z.infer<typeof MedicalRecordsInputSchema>;
