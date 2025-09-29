import { z } from 'zod';
export const ReminderDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  appointmentId: z.number().int(),
  appointment: z.unknown(),
  method: z.unknown(),
  sentAt: z.date(),
  status: z.unknown()
}));