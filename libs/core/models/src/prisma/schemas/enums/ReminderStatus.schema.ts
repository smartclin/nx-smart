import { z } from 'zod';

export const ReminderStatusSchema = z.enum(['SENT', 'FAILED', 'PENDING'])

export type ReminderStatus = z.infer<typeof ReminderStatusSchema>;