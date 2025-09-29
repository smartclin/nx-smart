import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterSelectObjectSchema as EncounterSelectObjectSchema } from './EncounterSelect.schema';
import { EncounterIncludeObjectSchema as EncounterIncludeObjectSchema } from './EncounterInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EncounterSelectObjectSchema).optional(),
  include: z.lazy(() => EncounterIncludeObjectSchema).optional()
}).strict();
export const EncounterArgsObjectSchema = makeSchema();
export const EncounterArgsObjectZodSchema = makeSchema();
