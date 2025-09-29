import { z } from 'zod';
export const ReminderCreateManyResultSchema = z.object({
  count: z.number()
});