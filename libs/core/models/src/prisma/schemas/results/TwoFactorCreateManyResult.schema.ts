import { z } from 'zod';
export const TwoFactorCreateManyResultSchema = z.object({
  count: z.number()
});