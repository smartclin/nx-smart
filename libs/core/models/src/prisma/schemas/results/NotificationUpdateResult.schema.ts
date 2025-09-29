import { z } from 'zod';
export const NotificationUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  title: z.string(),
  message: z.string(),
  type: z.unknown(),
  read: z.boolean(),
  createdAt: z.date()
}));