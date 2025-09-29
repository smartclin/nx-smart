import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsCreateManyInputObjectSchema as PatientBillsCreateManyInputObjectSchema } from './objects/PatientBillsCreateManyInput.schema';

export const PatientBillsCreateManySchema: z.ZodType<Prisma.PatientBillsCreateManyArgs> = z.object({ data: z.union([ PatientBillsCreateManyInputObjectSchema, z.array(PatientBillsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PatientBillsCreateManyArgs>;

export const PatientBillsCreateManyZodSchema = z.object({ data: z.union([ PatientBillsCreateManyInputObjectSchema, z.array(PatientBillsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();