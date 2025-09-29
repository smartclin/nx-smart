import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterSelectObjectSchema as EncounterSelectObjectSchema } from './objects/EncounterSelect.schema';
import { EncounterIncludeObjectSchema as EncounterIncludeObjectSchema } from './objects/EncounterInclude.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './objects/EncounterWhereUniqueInput.schema';
import { EncounterCreateInputObjectSchema as EncounterCreateInputObjectSchema } from './objects/EncounterCreateInput.schema';
import { EncounterUncheckedCreateInputObjectSchema as EncounterUncheckedCreateInputObjectSchema } from './objects/EncounterUncheckedCreateInput.schema';
import { EncounterUpdateInputObjectSchema as EncounterUpdateInputObjectSchema } from './objects/EncounterUpdateInput.schema';
import { EncounterUncheckedUpdateInputObjectSchema as EncounterUncheckedUpdateInputObjectSchema } from './objects/EncounterUncheckedUpdateInput.schema';

export const EncounterUpsertOneSchema: z.ZodType<Prisma.EncounterUpsertArgs> = z.object({ select: EncounterSelectObjectSchema.optional(), include: EncounterIncludeObjectSchema.optional(), where: EncounterWhereUniqueInputObjectSchema, create: z.union([ EncounterCreateInputObjectSchema, EncounterUncheckedCreateInputObjectSchema ]), update: z.union([ EncounterUpdateInputObjectSchema, EncounterUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EncounterUpsertArgs>;

export const EncounterUpsertOneZodSchema = z.object({ select: EncounterSelectObjectSchema.optional(), include: EncounterIncludeObjectSchema.optional(), where: EncounterWhereUniqueInputObjectSchema, create: z.union([ EncounterCreateInputObjectSchema, EncounterUncheckedCreateInputObjectSchema ]), update: z.union([ EncounterUpdateInputObjectSchema, EncounterUncheckedUpdateInputObjectSchema ]) }).strict();