import { z } from 'zod';
export const EncounterCreateManyResultSchema = z.object({
  count: z.number()
});