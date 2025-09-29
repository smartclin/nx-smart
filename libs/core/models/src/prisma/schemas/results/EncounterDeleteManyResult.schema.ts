import { z } from 'zod';
export const EncounterDeleteManyResultSchema = z.object({
  count: z.number()
});