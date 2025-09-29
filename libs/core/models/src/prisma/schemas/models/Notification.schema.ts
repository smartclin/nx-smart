import { z } from 'zod';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';

export const NotificationSchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  message: z.string(),
  type: NotificationTypeSchema,
  read: z.boolean(),
  createdAt: z.date(),
});

export type Notification = z.infer<typeof NotificationSchema>;
