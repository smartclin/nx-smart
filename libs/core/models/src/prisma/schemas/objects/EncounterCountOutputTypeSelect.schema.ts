import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  vitalSigns: z.boolean().optional()
}).strict();
export const EncounterCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EncounterCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCountOutputTypeSelect>;
export const EncounterCountOutputTypeSelectObjectZodSchema = makeSchema();
