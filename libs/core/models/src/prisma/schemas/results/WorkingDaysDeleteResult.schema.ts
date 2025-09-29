import { z } from 'zod';
export const WorkingDaysDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  doctorId: z.string(),
  day: z.string(),
  startTime: z.string(),
  closeTime: z.string(),
  doctor: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));