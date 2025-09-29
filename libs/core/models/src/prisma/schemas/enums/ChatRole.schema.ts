import { z } from 'zod';

export const ChatRoleSchema = z.enum(['USER', 'AI'])

export type ChatRole = z.infer<typeof ChatRoleSchema>;