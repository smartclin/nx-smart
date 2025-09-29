import { z } from 'zod';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema';

export const ReminderSchema = z.object({
  id: z.string(),
  appointmentId: z.number().int(),
  method: ReminderMethodSchema,
  sentAt: z.date(),
  status: ReminderStatusSchema,
});

export type ReminderType = z.infer<typeof ReminderSchema>;
