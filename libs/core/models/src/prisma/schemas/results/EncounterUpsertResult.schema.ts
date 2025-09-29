import { z } from 'zod';
export const EncounterUpsertResultSchema = z.object({
  id: z.string(),
  patientId: z.string(),
  patient: z.unknown(),
  doctorId: z.string(),
  doctor: z.unknown(),
  date: z.date(),
  type: z.string(),
  diagnosis: z.string().optional(),
  treatment: z.string().optional(),
  notes: z.string().optional(),
  medicalId: z.number().int(),
  medical: z.unknown(),
  vitalSigns: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});