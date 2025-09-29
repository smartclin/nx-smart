import { z } from 'zod';

export const ReminderMethodSchema = z.enum(['EMAIL', 'SMS'])

export type ReminderMethod = z.infer<typeof ReminderMethodSchema>;