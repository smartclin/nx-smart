import { z } from 'zod';
export const VerificationCreateResultSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.date(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});