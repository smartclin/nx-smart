import { z } from 'zod';
export const PatientCreateManyResultSchema = z.object({
  count: z.number()
});