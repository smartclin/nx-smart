import { z } from 'zod';
export const SessionUpsertResultSchema = z.object({
  id: z.string(),
  expiresAt: z.date(),
  token: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  userId: z.string(),
  user: z.unknown(),
  impersonatedBy: z.string().optional()
});