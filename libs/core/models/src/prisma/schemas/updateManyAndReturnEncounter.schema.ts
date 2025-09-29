import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterSelectObjectSchema as EncounterSelectObjectSchema } from './objects/EncounterSelect.schema';
import { EncounterUpdateManyMutationInputObjectSchema as EncounterUpdateManyMutationInputObjectSchema } from './objects/EncounterUpdateManyMutationInput.schema';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './objects/EncounterWhereInput.schema';

export const EncounterUpdateManyAndReturnSchema: z.ZodType<Prisma.EncounterUpdateManyAndReturnArgs> = z.object({ select: EncounterSelectObjectSchema.optional(), data: EncounterUpdateManyMutationInputObjectSchema, where: EncounterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EncounterUpdateManyAndReturnArgs>;

export const EncounterUpdateManyAndReturnZodSchema = z.object({ select: EncounterSelectObjectSchema.optional(), data: EncounterUpdateManyMutationInputObjectSchema, where: EncounterWhereInputObjectSchema.optional() }).strict();