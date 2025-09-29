import { z } from 'zod';
export const LabTestFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  recordId: z.number().int(),
  testDate: z.date(),
  result: z.string(),
  status: z.string(),
  notes: z.string().optional(),
  serviceId: z.number().int().optional(),
  services: z.unknown().optional(),
  medicalRecord: z.unknown(),
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