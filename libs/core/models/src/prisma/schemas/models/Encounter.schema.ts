import { z } from 'zod';

export const EncounterSchema = z.object({
  id: z.string(),
  patientId: z.string(),
  doctorId: z.string(),
  date: z.date(),
  type: z.string(),
  diagnosis: z.string().nullish(),
  treatment: z.string().nullish(),
  notes: z.string().nullish(),
  medicalId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type EncounterType = z.infer<typeof EncounterSchema>;
