import { z } from 'zod';

// prettier-ignore
export const MedicalRecordsModelSchema = z.object({
    id: z.number().int(),
    patientId: z.string(),
    appointmentId: z.number().int(),
    doctorId: z.string(),
    treatmentPlan: z.string().nullable(),
    prescriptions: z.string().nullable(),
    labRequest: z.string().nullable(),
    notes: z.string().nullable(),
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

export type MedicalRecordsModelType = z.infer<typeof MedicalRecordsModelSchema>;
