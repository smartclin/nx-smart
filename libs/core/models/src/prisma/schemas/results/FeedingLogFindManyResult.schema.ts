import { z } from 'zod';
export const FeedingLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  patientId: z.string(),
  patient: z.unknown(),
  date: z.date(),
  type: z.unknown(),
  duration: z.number().int().optional(),
  amount: z.number().optional(),
  breast: z.string().optional(),
  notes: z.string().optional()
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