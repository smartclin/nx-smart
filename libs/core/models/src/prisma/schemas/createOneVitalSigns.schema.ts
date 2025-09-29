import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsSelectObjectSchema as VitalSignsSelectObjectSchema } from './objects/VitalSignsSelect.schema';
import { VitalSignsIncludeObjectSchema as VitalSignsIncludeObjectSchema } from './objects/VitalSignsInclude.schema';
import { VitalSignsCreateInputObjectSchema as VitalSignsCreateInputObjectSchema } from './objects/VitalSignsCreateInput.schema';
import { VitalSignsUncheckedCreateInputObjectSchema as VitalSignsUncheckedCreateInputObjectSchema } from './objects/VitalSignsUncheckedCreateInput.schema';

export const VitalSignsCreateOneSchema: z.ZodType<Prisma.VitalSignsCreateArgs> = z.object({ select: VitalSignsSelectObjectSchema.optional(), include: VitalSignsIncludeObjectSchema.optional(), data: z.union([VitalSignsCreateInputObjectSchema, VitalSignsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.VitalSignsCreateArgs>;

export const VitalSignsCreateOneZodSchema = z.object({ select: VitalSignsSelectObjectSchema.optional(), include: VitalSignsIncludeObjectSchema.optional(), data: z.union([VitalSignsCreateInputObjectSchema, VitalSignsUncheckedCreateInputObjectSchema]) }).strict();