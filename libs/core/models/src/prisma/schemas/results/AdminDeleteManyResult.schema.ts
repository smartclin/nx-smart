import { z } from 'zod';
export const AdminDeleteManyResultSchema = z.object({
  count: z.number()
});