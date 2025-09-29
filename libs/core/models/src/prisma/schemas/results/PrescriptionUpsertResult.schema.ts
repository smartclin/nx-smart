import { z } from 'zod';
export const PrescriptionUpsertResultSchema = z.object({
  id: z.number().int(),
  medicalRecordId: z.number().int(),
  doctorId: z.string().optional(),
  patientId: z.string(),
  medicationName: z.string(),
  dosage: z.string(),
  frequency: z.string(),
  duration: z.string(),
  instructions: z.string().optional(),
  issuedDate: z.date(),
  endDate: z.date().optional(),
  status: z.string(),
  medicalRecord: z.unknown(),
  doctor: z.unknown().optional(),
  patient: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});