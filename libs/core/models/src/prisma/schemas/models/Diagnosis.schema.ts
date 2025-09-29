import { z } from 'zod';

export const DiagnosisSchema = z.object({
  id: z.number().int(),
  patientId: z.string(),
  medicalId: z.number().int(),
  doctorId: z.string(),
  symptoms: z.string(),
  diagnosis: z.string(),
  notes: z.string().nullish(),
  prescribedMedications: z.string().nullish(),
  followUpPlan: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type DiagnosisType = z.infer<typeof DiagnosisSchema>;
