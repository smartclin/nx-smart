import { z } from 'zod';
export const VitalSignsFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  encounterId: z.string().optional(),
  encounter: z.unknown().optional(),
  patientId: z.string(),
  medicalId: z.number().int(),
  medical: z.unknown(),
  height: z.number().optional(),
  weight: z.number().optional(),
  temperature: z.number().optional(),
  systolic: z.number().int().optional(),
  diastolic: z.number().int().optional(),
  heartRate: z.number().int().optional(),
  respiratoryRate: z.number().int().optional(),
  oxygenSaturation: z.number().int().optional(),
  recordedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date()
}));