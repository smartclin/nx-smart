import { z } from 'zod';
export const PatientDeleteManyResultSchema = z.object({
  count: z.number()
});