import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './EncounterWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => EncounterWhereInputObjectSchema).optional(),
  some: z.lazy(() => EncounterWhereInputObjectSchema).optional(),
  none: z.lazy(() => EncounterWhereInputObjectSchema).optional()
}).strict();
export const EncounterListRelationFilterObjectSchema: z.ZodType<Prisma.EncounterListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EncounterListRelationFilter>;
export const EncounterListRelationFilterObjectZodSchema = makeSchema();
