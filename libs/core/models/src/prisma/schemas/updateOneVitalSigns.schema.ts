import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsSelectObjectSchema as VitalSignsSelectObjectSchema } from './objects/VitalSignsSelect.schema';
import { VitalSignsIncludeObjectSchema as VitalSignsIncludeObjectSchema } from './objects/VitalSignsInclude.schema';
import { VitalSignsUpdateInputObjectSchema as VitalSignsUpdateInputObjectSchema } from './objects/VitalSignsUpdateInput.schema';
import { VitalSignsUncheckedUpdateInputObjectSchema as VitalSignsUncheckedUpdateInputObjectSchema } from './objects/VitalSignsUncheckedUpdateInput.schema';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './objects/VitalSignsWhereUniqueInput.schema';

export const VitalSignsUpdateOneSchema: z.ZodType<Prisma.VitalSignsUpdateArgs> = z.object({ select: VitalSignsSelectObjectSchema.optional(), include: VitalSignsIncludeObjectSchema.optional(), data: z.union([VitalSignsUpdateInputObjectSchema, VitalSignsUncheckedUpdateInputObjectSchema]), where: VitalSignsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VitalSignsUpdateArgs>;

export const VitalSignsUpdateOneZodSchema = z.object({ select: VitalSignsSelectObjectSchema.optional(), include: VitalSignsIncludeObjectSchema.optional(), data: z.union([VitalSignsUpdateInputObjectSchema, VitalSignsUncheckedUpdateInputObjectSchema]), where: VitalSignsWhereUniqueInputObjectSchema }).strict();