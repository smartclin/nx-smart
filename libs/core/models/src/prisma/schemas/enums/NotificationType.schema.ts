import { z } from 'zod';

export const NotificationTypeSchema = z.enum(['APPOINTMENT_REMINDER', 'BILLING', 'GENERAL', 'SECURITY'])

export type NotificationType = z.infer<typeof NotificationTypeSchema>;