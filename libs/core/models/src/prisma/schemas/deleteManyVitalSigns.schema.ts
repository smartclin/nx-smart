import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsWhereInputObjectSchema as VitalSignsWhereInputObjectSchema } from './objects/VitalSignsWhereInput.schema';

export const VitalSignsDeleteManySchema: z.ZodType<Prisma.VitalSignsDeleteManyArgs> = z.object({ where: VitalSignsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VitalSignsDeleteManyArgs>;

export const VitalSignsDeleteManyZodSchema = z.object({ where: VitalSignsWhereInputObjectSchema.optional() }).strict();