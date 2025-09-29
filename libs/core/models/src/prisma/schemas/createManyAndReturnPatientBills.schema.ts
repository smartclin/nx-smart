import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsSelectObjectSchema as PatientBillsSelectObjectSchema } from './objects/PatientBillsSelect.schema';
import { PatientBillsCreateManyInputObjectSchema as PatientBillsCreateManyInputObjectSchema } from './objects/PatientBillsCreateManyInput.schema';

export const PatientBillsCreateManyAndReturnSchema: z.ZodType<Prisma.PatientBillsCreateManyAndReturnArgs> = z.object({ select: PatientBillsSelectObjectSchema.optional(), data: z.union([ PatientBillsCreateManyInputObjectSchema, z.array(PatientBillsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PatientBillsCreateManyAndReturnArgs>;

export const PatientBillsCreateManyAndReturnZodSchema = z.object({ select: PatientBillsSelectObjectSchema.optional(), data: z.union([ PatientBillsCreateManyInputObjectSchema, z.array(PatientBillsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();