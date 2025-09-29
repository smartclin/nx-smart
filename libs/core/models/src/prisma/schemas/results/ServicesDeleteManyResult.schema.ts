import { z } from 'zod';
export const ServicesDeleteManyResultSchema = z.object({
  count: z.number()
});