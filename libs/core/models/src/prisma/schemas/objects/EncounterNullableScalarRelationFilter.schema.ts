import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './EncounterWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EncounterWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => EncounterWhereInputObjectSchema).optional().nullable()
}).strict();
export const EncounterNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.EncounterNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EncounterNullableScalarRelationFilter>;
export const EncounterNullableScalarRelationFilterObjectZodSchema = makeSchema();
