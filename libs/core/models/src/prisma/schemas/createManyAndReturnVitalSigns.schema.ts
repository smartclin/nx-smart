import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsSelectObjectSchema as VitalSignsSelectObjectSchema } from './objects/VitalSignsSelect.schema';
import { VitalSignsCreateManyInputObjectSchema as VitalSignsCreateManyInputObjectSchema } from './objects/VitalSignsCreateManyInput.schema';

export const VitalSignsCreateManyAndReturnSchema: z.ZodType<Prisma.VitalSignsCreateManyAndReturnArgs> = z.object({ select: VitalSignsSelectObjectSchema.optional(), data: z.union([ VitalSignsCreateManyInputObjectSchema, z.array(VitalSignsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VitalSignsCreateManyAndReturnArgs>;

export const VitalSignsCreateManyAndReturnZodSchema = z.object({ select: VitalSignsSelectObjectSchema.optional(), data: z.union([ VitalSignsCreateManyInputObjectSchema, z.array(VitalSignsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();