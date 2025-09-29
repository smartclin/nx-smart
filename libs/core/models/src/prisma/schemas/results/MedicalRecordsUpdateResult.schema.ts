import { z } from 'zod';
export const MedicalRecordsUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  patientId: z.string(),
  appointmentId: z.number().int(),
  doctorId: z.string(),
  treatmentPlan: z.string().optional(),
  prescriptions: z.string().optional(),
  labRequest: z.string().optional(),
  notes: z.string().optional(),
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
}));