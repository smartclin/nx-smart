import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id', 'userId', 'title', 'message', 'type', 'read', 'createdAt'])

export type NotificationScalarFieldEnum = z.infer<typeof NotificationScalarFieldEnumSchema>;