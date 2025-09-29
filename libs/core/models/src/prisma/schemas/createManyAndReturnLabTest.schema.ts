import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestSelectObjectSchema as LabTestSelectObjectSchema } from './objects/LabTestSelect.schema';
import { LabTestCreateManyInputObjectSchema as LabTestCreateManyInputObjectSchema } from './objects/LabTestCreateManyInput.schema';

export const LabTestCreateManyAndReturnSchema: z.ZodType<Prisma.LabTestCreateManyAndReturnArgs> = z.object({ select: LabTestSelectObjectSchema.optional(), data: z.union([ LabTestCreateManyInputObjectSchema, z.array(LabTestCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LabTestCreateManyAndReturnArgs>;

export const LabTestCreateManyAndReturnZodSchema = z.object({ select: LabTestSelectObjectSchema.optional(), data: z.union([ LabTestCreateManyInputObjectSchema, z.array(LabTestCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();