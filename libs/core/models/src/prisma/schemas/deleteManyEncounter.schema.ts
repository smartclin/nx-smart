import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './objects/EncounterWhereInput.schema';

export const EncounterDeleteManySchema: z.ZodType<Prisma.EncounterDeleteManyArgs> = z.object({ where: EncounterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EncounterDeleteManyArgs>;

export const EncounterDeleteManyZodSchema = z.object({ where: EncounterWhereInputObjectSchema.optional() }).strict();