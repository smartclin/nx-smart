import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterSelectObjectSchema as EncounterSelectObjectSchema } from './objects/EncounterSelect.schema';
import { EncounterIncludeObjectSchema as EncounterIncludeObjectSchema } from './objects/EncounterInclude.schema';
import { EncounterUpdateInputObjectSchema as EncounterUpdateInputObjectSchema } from './objects/EncounterUpdateInput.schema';
import { EncounterUncheckedUpdateInputObjectSchema as EncounterUncheckedUpdateInputObjectSchema } from './objects/EncounterUncheckedUpdateInput.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './objects/EncounterWhereUniqueInput.schema';

export const EncounterUpdateOneSchema: z.ZodType<Prisma.EncounterUpdateArgs> = z.object({ select: EncounterSelectObjectSchema.optional(), include: EncounterIncludeObjectSchema.optional(), data: z.union([EncounterUpdateInputObjectSchema, EncounterUncheckedUpdateInputObjectSchema]), where: EncounterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EncounterUpdateArgs>;

export const EncounterUpdateOneZodSchema = z.object({ select: EncounterSelectObjectSchema.optional(), include: EncounterIncludeObjectSchema.optional(), data: z.union([EncounterUpdateInputObjectSchema, EncounterUncheckedUpdateInputObjectSchema]), where: EncounterWhereUniqueInputObjectSchema }).strict();