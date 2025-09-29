import { z } from 'zod';
export const DiagnosisUpsertResultSchema = z.object({
  id: z.number().int(),
  patientId: z.string(),
  medicalId: z.number().int(),
  doctorId: z.string(),
  doctor: z.unknown(),
  symptoms: z.string(),
  diagnosis: z.string(),
  notes: z.string().optional(),
  prescribedMedications: z.string().optional(),
  followUpPlan: z.string().optional(),
  medical: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});