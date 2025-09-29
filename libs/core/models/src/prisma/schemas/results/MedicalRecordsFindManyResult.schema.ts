import { z } from 'zod';
export const MedicalRecordsFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});