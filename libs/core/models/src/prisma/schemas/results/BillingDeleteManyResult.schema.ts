import { z } from 'zod';
export const BillingDeleteManyResultSchema = z.object({
  count: z.number()
});