import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterUpdateManyMutationInputObjectSchema as EncounterUpdateManyMutationInputObjectSchema } from './objects/EncounterUpdateManyMutationInput.schema';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './objects/EncounterWhereInput.schema';

export const EncounterUpdateManySchema: z.ZodType<Prisma.EncounterUpdateManyArgs> = z.object({ data: EncounterUpdateManyMutationInputObjectSchema, where: EncounterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EncounterUpdateManyArgs>;

export const EncounterUpdateManyZodSchema = z.object({ data: EncounterUpdateManyMutationInputObjectSchema, where: EncounterWhereInputObjectSchema.optional() }).strict();