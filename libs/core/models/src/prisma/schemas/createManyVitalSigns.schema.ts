import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsCreateManyInputObjectSchema as VitalSignsCreateManyInputObjectSchema } from './objects/VitalSignsCreateManyInput.schema';

export const VitalSignsCreateManySchema: z.ZodType<Prisma.VitalSignsCreateManyArgs> = z.object({ data: z.union([ VitalSignsCreateManyInputObjectSchema, z.array(VitalSignsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VitalSignsCreateManyArgs>;

export const VitalSignsCreateManyZodSchema = z.object({ data: z.union([ VitalSignsCreateManyInputObjectSchema, z.array(VitalSignsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();