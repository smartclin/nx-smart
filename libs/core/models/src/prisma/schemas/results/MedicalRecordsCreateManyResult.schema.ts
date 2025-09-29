import { z } from 'zod';
export const MedicalRecordsCreateManyResultSchema = z.object({
  count: z.number()
});