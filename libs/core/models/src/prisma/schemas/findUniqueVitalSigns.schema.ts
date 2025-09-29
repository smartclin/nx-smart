import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsSelectObjectSchema as VitalSignsSelectObjectSchema } from './objects/VitalSignsSelect.schema';
import { VitalSignsIncludeObjectSchema as VitalSignsIncludeObjectSchema } from './objects/VitalSignsInclude.schema';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './objects/VitalSignsWhereUniqueInput.schema';

export const VitalSignsFindUniqueSchema: z.ZodType<Prisma.VitalSignsFindUniqueArgs> = z.object({ select: VitalSignsSelectObjectSchema.optional(), include: VitalSignsIncludeObjectSchema.optional(), where: VitalSignsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VitalSignsFindUniqueArgs>;

export const VitalSignsFindUniqueZodSchema = z.object({ select: VitalSignsSelectObjectSchema.optional(), include: VitalSignsIncludeObjectSchema.optional(), where: VitalSignsWhereUniqueInputObjectSchema }).strict();