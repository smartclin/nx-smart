import { z } from 'zod';

import { NotificationTypeSchema } from '../../enums/NotificationType.schema';
// prettier-ignore
export const NotificationInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    title: z.string(),
    message: z.string(),
    type: NotificationTypeSchema,
    read: z.boolean(),
    createdAt: z.date()
}).strict();

export type NotificationInputType = z.infer<typeof NotificationInputSchema>;
