import { z } from 'zod';
export const WorkingDaysFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  doctorId: z.string(),
  day: z.string(),
  startTime: z.string(),
  closeTime: z.string(),
  doctor: z.unknown(),
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