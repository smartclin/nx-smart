import { z } from 'zod';
export const PatientBillsDeleteManyResultSchema = z.object({
  count: z.number()
});