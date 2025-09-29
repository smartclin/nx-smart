import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsSelectObjectSchema as VitalSignsSelectObjectSchema } from './objects/VitalSignsSelect.schema';
import { VitalSignsUpdateManyMutationInputObjectSchema as VitalSignsUpdateManyMutationInputObjectSchema } from './objects/VitalSignsUpdateManyMutationInput.schema';
import { VitalSignsWhereInputObjectSchema as VitalSignsWhereInputObjectSchema } from './objects/VitalSignsWhereInput.schema';

export const VitalSignsUpdateManyAndReturnSchema: z.ZodType<Prisma.VitalSignsUpdateManyAndReturnArgs> = z.object({ select: VitalSignsSelectObjectSchema.optional(), data: VitalSignsUpdateManyMutationInputObjectSchema, where: VitalSignsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VitalSignsUpdateManyAndReturnArgs>;

export const VitalSignsUpdateManyAndReturnZodSchema = z.object({ select: VitalSignsSelectObjectSchema.optional(), data: VitalSignsUpdateManyMutationInputObjectSchema, where: VitalSignsWhereInputObjectSchema.optional() }).strict();