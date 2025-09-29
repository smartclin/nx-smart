import { z } from 'zod';
export const DiagnosisCreateManyResultSchema = z.object({
  count: z.number()
});