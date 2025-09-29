import { z } from 'zod';
export const ImmunizationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  patientId: z.string(),
  patient: z.unknown(),
  vaccine: z.string(),
  date: z.date(),
  dose: z.string().optional(),
  lotNumber: z.string().optional(),
  administeredByStaffId: z.string().optional(),
  administeredBy: z.unknown().optional(),
  notes: z.string().optional(),
  createdAt: z.date()
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