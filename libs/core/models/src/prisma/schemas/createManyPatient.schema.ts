import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientCreateManyInputObjectSchema as PatientCreateManyInputObjectSchema } from './objects/PatientCreateManyInput.schema';

export const PatientCreateManySchema: z.ZodType<Prisma.PatientCreateManyArgs> = z.object({ data: z.union([ PatientCreateManyInputObjectSchema, z.array(PatientCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PatientCreateManyArgs>;

export const PatientCreateManyZodSchema = z.object({ data: z.union([ PatientCreateManyInputObjectSchema, z.array(PatientCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();