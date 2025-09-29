import { z } from 'zod';
export const PrescriptionFindManyResultSchema = z.object({
  data: z.array(z.object({
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