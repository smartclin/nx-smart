import { z } from 'zod';
export const AdminCreateManyResultSchema = z.object({
  count: z.number()
});