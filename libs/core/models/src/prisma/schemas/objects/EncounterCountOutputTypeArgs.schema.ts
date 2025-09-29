import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterCountOutputTypeSelectObjectSchema as EncounterCountOutputTypeSelectObjectSchema } from './EncounterCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EncounterCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const EncounterCountOutputTypeArgsObjectSchema = makeSchema();
export const EncounterCountOutputTypeArgsObjectZodSchema = makeSchema();
