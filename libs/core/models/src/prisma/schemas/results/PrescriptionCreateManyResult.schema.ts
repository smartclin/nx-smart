import { z } from 'zod';
export const PrescriptionCreateManyResultSchema = z.object({
  count: z.number()
});