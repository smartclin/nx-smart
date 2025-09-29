import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsSelectObjectSchema as PatientBillsSelectObjectSchema } from './objects/PatientBillsSelect.schema';
import { PatientBillsIncludeObjectSchema as PatientBillsIncludeObjectSchema } from './objects/PatientBillsInclude.schema';
import { PatientBillsCreateInputObjectSchema as PatientBillsCreateInputObjectSchema } from './objects/PatientBillsCreateInput.schema';
import { PatientBillsUncheckedCreateInputObjectSchema as PatientBillsUncheckedCreateInputObjectSchema } from './objects/PatientBillsUncheckedCreateInput.schema';

export const PatientBillsCreateOneSchema: z.ZodType<Prisma.PatientBillsCreateArgs> = z.object({ select: PatientBillsSelectObjectSchema.optional(), include: PatientBillsIncludeObjectSchema.optional(), data: z.union([PatientBillsCreateInputObjectSchema, PatientBillsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PatientBillsCreateArgs>;

export const PatientBillsCreateOneZodSchema = z.object({ select: PatientBillsSelectObjectSchema.optional(), include: PatientBillsIncludeObjectSchema.optional(), data: z.union([PatientBillsCreateInputObjectSchema, PatientBillsUncheckedCreateInputObjectSchema]) }).strict();