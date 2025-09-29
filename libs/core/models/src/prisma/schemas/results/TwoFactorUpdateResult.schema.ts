import { z } from 'zod';
export const TwoFactorUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string(),
  userId: z.string(),
  user: z.unknown()
}));