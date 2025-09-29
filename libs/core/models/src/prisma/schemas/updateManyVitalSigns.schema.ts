import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsUpdateManyMutationInputObjectSchema as VitalSignsUpdateManyMutationInputObjectSchema } from './objects/VitalSignsUpdateManyMutationInput.schema';
import { VitalSignsWhereInputObjectSchema as VitalSignsWhereInputObjectSchema } from './objects/VitalSignsWhereInput.schema';

export const VitalSignsUpdateManySchema: z.ZodType<Prisma.VitalSignsUpdateManyArgs> = z.object({ data: VitalSignsUpdateManyMutationInputObjectSchema, where: VitalSignsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VitalSignsUpdateManyArgs>;

export const VitalSignsUpdateManyZodSchema = z.object({ data: VitalSignsUpdateManyMutationInputObjectSchema, where: VitalSignsWhereInputObjectSchema.optional() }).strict();