import { z } from 'zod';

export const PrescriptionSchema = z.object({
  id: z.number().int(),
  medicalRecordId: z.number().int(),
  doctorId: z.string().nullish(),
  patientId: z.string(),
  medicationName: z.string(),
  dosage: z.string(),
  frequency: z.string(),
  duration: z.string(),
  instructions: z.string().nullish(),
  issuedDate: z.date(),
  endDate: z.date().nullish(),
  status: z.string().default("active"),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PrescriptionType = z.infer<typeof PrescriptionSchema>;
