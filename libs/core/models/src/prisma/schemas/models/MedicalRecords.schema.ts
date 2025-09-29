import { z } from 'zod';

export const MedicalRecordsSchema = z.object({
  id: z.number().int(),
  patientId: z.string(),
  appointmentId: z.number().int(),
  doctorId: z.string(),
  treatmentPlan: z.string().nullish(),
  prescriptions: z.string().nullish(),
  labRequest: z.string().nullish(),
  notes: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MedicalRecordsType = z.infer<typeof MedicalRecordsSchema>;
