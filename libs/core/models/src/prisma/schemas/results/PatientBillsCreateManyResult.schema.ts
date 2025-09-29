import { z } from 'zod';
export const PatientBillsCreateManyResultSchema = z.object({
  count: z.number()
});