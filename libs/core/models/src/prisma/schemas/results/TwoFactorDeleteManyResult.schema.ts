import { z } from 'zod';
export const TwoFactorDeleteManyResultSchema = z.object({
  count: z.number()
});