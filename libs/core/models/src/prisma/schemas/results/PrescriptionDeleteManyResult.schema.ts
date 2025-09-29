import { z } from 'zod';
export const PrescriptionDeleteManyResultSchema = z.object({
  count: z.number()
});