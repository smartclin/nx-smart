import { z } from 'zod';
export const ReminderFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  appointmentId: z.number().int(),
  appointment: z.unknown(),
  method: z.unknown(),
  sentAt: z.date(),
  status: z.unknown()
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