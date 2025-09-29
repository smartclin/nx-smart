import { z } from 'zod';
export const DiagnosisFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  patientId: z.string(),
  medicalId: z.number().int(),
  doctorId: z.string(),
  doctor: z.unknown(),
  symptoms: z.string(),
  diagnosis: z.string(),
  notes: z.string().optional(),
  prescribedMedications: z.string().optional(),
  followUpPlan: z.string().optional(),
  medical: z.unknown(),
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