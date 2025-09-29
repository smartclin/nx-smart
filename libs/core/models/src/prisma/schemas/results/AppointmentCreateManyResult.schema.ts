import { z } from 'zod';
export const AppointmentCreateManyResultSchema = z.object({
  count: z.number()
});