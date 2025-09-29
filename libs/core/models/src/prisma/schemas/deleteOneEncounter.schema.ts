import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterSelectObjectSchema as EncounterSelectObjectSchema } from './objects/EncounterSelect.schema';
import { EncounterIncludeObjectSchema as EncounterIncludeObjectSchema } from './objects/EncounterInclude.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './objects/EncounterWhereUniqueInput.schema';

export const EncounterDeleteOneSchema: z.ZodType<Prisma.EncounterDeleteArgs> = z.object({ select: EncounterSelectObjectSchema.optional(), include: EncounterIncludeObjectSchema.optional(), where: EncounterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EncounterDeleteArgs>;

export const EncounterDeleteOneZodSchema = z.object({ select: EncounterSelectObjectSchema.optional(), include: EncounterIncludeObjectSchema.optional(), where: EncounterWhereUniqueInputObjectSchema }).strict();