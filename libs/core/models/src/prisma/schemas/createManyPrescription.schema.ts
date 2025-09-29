import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionCreateManyInputObjectSchema as PrescriptionCreateManyInputObjectSchema } from './objects/PrescriptionCreateManyInput.schema';

export const PrescriptionCreateManySchema: z.ZodType<Prisma.PrescriptionCreateManyArgs> = z.object({ data: z.union([ PrescriptionCreateManyInputObjectSchema, z.array(PrescriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PrescriptionCreateManyArgs>;

export const PrescriptionCreateManyZodSchema = z.object({ data: z.union([ PrescriptionCreateManyInputObjectSchema, z.array(PrescriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();