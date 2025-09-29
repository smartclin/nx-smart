import { z } from 'zod';
export const ServicesCreateManyResultSchema = z.object({
  count: z.number()
});