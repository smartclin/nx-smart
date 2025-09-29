import { z } from 'zod';

export const WorkingDaysSchema = z.object({
  id: z.number().int(),
  doctorId: z.string(),
  day: z.string(),
  startTime: z.string(),
  closeTime: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type WorkingDaysType = z.infer<typeof WorkingDaysSchema>;
