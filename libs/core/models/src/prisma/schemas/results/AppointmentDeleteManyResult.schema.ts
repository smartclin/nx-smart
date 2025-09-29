import { z } from 'zod';
export const AppointmentDeleteManyResultSchema = z.object({
  count: z.number()
});