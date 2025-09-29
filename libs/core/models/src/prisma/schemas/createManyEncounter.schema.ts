import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterCreateManyInputObjectSchema as EncounterCreateManyInputObjectSchema } from './objects/EncounterCreateManyInput.schema';

export const EncounterCreateManySchema: z.ZodType<Prisma.EncounterCreateManyArgs> = z.object({ data: z.union([ EncounterCreateManyInputObjectSchema, z.array(EncounterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EncounterCreateManyArgs>;

export const EncounterCreateManyZodSchema = z.object({ data: z.union([ EncounterCreateManyInputObjectSchema, z.array(EncounterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();