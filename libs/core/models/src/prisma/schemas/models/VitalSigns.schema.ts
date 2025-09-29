import { z } from 'zod';

export const VitalSignsSchema = z.object({
  id: z.string(),
  encounterId: z.string().nullish(),
  patientId: z.string(),
  medicalId: z.number().int(),
  height: z.number().nullish(),
  weight: z.number().nullish(),
  temperature: z.number().nullish(),
  systolic: z.number().int().nullish(),
  diastolic: z.number().int().nullish(),
  heartRate: z.number().int().nullish(),
  respiratoryRate: z.number().int().nullish(),
  oxygenSaturation: z.number().int().nullish(),
  recordedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type VitalSignsType = z.infer<typeof VitalSignsSchema>;
