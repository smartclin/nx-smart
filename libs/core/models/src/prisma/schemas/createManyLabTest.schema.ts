import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestCreateManyInputObjectSchema as LabTestCreateManyInputObjectSchema } from './objects/LabTestCreateManyInput.schema';

export const LabTestCreateManySchema: z.ZodType<Prisma.LabTestCreateManyArgs> = z.object({ data: z.union([ LabTestCreateManyInputObjectSchema, z.array(LabTestCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LabTestCreateManyArgs>;

export const LabTestCreateManyZodSchema = z.object({ data: z.union([ LabTestCreateManyInputObjectSchema, z.array(LabTestCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();