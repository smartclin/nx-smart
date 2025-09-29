import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterSelectObjectSchema as EncounterSelectObjectSchema } from './objects/EncounterSelect.schema';
import { EncounterIncludeObjectSchema as EncounterIncludeObjectSchema } from './objects/EncounterInclude.schema';
import { EncounterCreateInputObjectSchema as EncounterCreateInputObjectSchema } from './objects/EncounterCreateInput.schema';
import { EncounterUncheckedCreateInputObjectSchema as EncounterUncheckedCreateInputObjectSchema } from './objects/EncounterUncheckedCreateInput.schema';

export const EncounterCreateOneSchema: z.ZodType<Prisma.EncounterCreateArgs> = z.object({ select: EncounterSelectObjectSchema.optional(), include: EncounterIncludeObjectSchema.optional(), data: z.union([EncounterCreateInputObjectSchema, EncounterUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EncounterCreateArgs>;

export const EncounterCreateOneZodSchema = z.object({ select: EncounterSelectObjectSchema.optional(), include: EncounterIncludeObjectSchema.optional(), data: z.union([EncounterCreateInputObjectSchema, EncounterUncheckedCreateInputObjectSchema]) }).strict();