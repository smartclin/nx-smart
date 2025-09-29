import { z } from 'zod';
export const FeedingLogCreateResultSchema = z.object({
  id: z.string(),
  patientId: z.string(),
  patient: z.unknown(),
  date: z.date(),
  type: z.unknown(),
  duration: z.number().int().optional(),
  amount: z.number().optional(),
  breast: z.string().optional(),
  notes: z.string().optional()
});