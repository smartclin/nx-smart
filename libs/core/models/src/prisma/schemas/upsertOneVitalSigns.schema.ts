import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsSelectObjectSchema as VitalSignsSelectObjectSchema } from './objects/VitalSignsSelect.schema';
import { VitalSignsIncludeObjectSchema as VitalSignsIncludeObjectSchema } from './objects/VitalSignsInclude.schema';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './objects/VitalSignsWhereUniqueInput.schema';
import { VitalSignsCreateInputObjectSchema as VitalSignsCreateInputObjectSchema } from './objects/VitalSignsCreateInput.schema';
import { VitalSignsUncheckedCreateInputObjectSchema as VitalSignsUncheckedCreateInputObjectSchema } from './objects/VitalSignsUncheckedCreateInput.schema';
import { VitalSignsUpdateInputObjectSchema as VitalSignsUpdateInputObjectSchema } from './objects/VitalSignsUpdateInput.schema';
import { VitalSignsUncheckedUpdateInputObjectSchema as VitalSignsUncheckedUpdateInputObjectSchema } from './objects/VitalSignsUncheckedUpdateInput.schema';

export const VitalSignsUpsertOneSchema: z.ZodType<Prisma.VitalSignsUpsertArgs> = z.object({ select: VitalSignsSelectObjectSchema.optional(), include: VitalSignsIncludeObjectSchema.optional(), where: VitalSignsWhereUniqueInputObjectSchema, create: z.union([ VitalSignsCreateInputObjectSchema, VitalSignsUncheckedCreateInputObjectSchema ]), update: z.union([ VitalSignsUpdateInputObjectSchema, VitalSignsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.VitalSignsUpsertArgs>;

export const VitalSignsUpsertOneZodSchema = z.object({ select: VitalSignsSelectObjectSchema.optional(), include: VitalSignsIncludeObjectSchema.optional(), where: VitalSignsWhereUniqueInputObjectSchema, create: z.union([ VitalSignsCreateInputObjectSchema, VitalSignsUncheckedCreateInputObjectSchema ]), update: z.union([ VitalSignsUpdateInputObjectSchema, VitalSignsUncheckedUpdateInputObjectSchema ]) }).strict();