import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionSelectObjectSchema as PrescriptionSelectObjectSchema } from './objects/PrescriptionSelect.schema';
import { PrescriptionCreateManyInputObjectSchema as PrescriptionCreateManyInputObjectSchema } from './objects/PrescriptionCreateManyInput.schema';

export const PrescriptionCreateManyAndReturnSchema: z.ZodType<Prisma.PrescriptionCreateManyAndReturnArgs> = z.object({ select: PrescriptionSelectObjectSchema.optional(), data: z.union([ PrescriptionCreateManyInputObjectSchema, z.array(PrescriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PrescriptionCreateManyAndReturnArgs>;

export const PrescriptionCreateManyAndReturnZodSchema = z.object({ select: PrescriptionSelectObjectSchema.optional(), data: z.union([ PrescriptionCreateManyInputObjectSchema, z.array(PrescriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();