import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterSelectObjectSchema as EncounterSelectObjectSchema } from './objects/EncounterSelect.schema';
import { EncounterCreateManyInputObjectSchema as EncounterCreateManyInputObjectSchema } from './objects/EncounterCreateManyInput.schema';

export const EncounterCreateManyAndReturnSchema: z.ZodType<Prisma.EncounterCreateManyAndReturnArgs> = z.object({ select: EncounterSelectObjectSchema.optional(), data: z.union([ EncounterCreateManyInputObjectSchema, z.array(EncounterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EncounterCreateManyAndReturnArgs>;

export const EncounterCreateManyAndReturnZodSchema = z.object({ select: EncounterSelectObjectSchema.optional(), data: z.union([ EncounterCreateManyInputObjectSchema, z.array(EncounterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();