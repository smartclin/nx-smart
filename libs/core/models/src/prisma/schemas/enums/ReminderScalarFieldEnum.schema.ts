import { z } from 'zod';

export const ReminderScalarFieldEnumSchema = z.enum(['id', 'appointmentId', 'method', 'sentAt', 'status'])

export type ReminderScalarFieldEnum = z.infer<typeof ReminderScalarFieldEnumSchema>;