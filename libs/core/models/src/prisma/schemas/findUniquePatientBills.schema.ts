import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsSelectObjectSchema as PatientBillsSelectObjectSchema } from './objects/PatientBillsSelect.schema';
import { PatientBillsIncludeObjectSchema as PatientBillsIncludeObjectSchema } from './objects/PatientBillsInclude.schema';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './objects/PatientBillsWhereUniqueInput.schema';

export const PatientBillsFindUniqueSchema: z.ZodType<Prisma.PatientBillsFindUniqueArgs> = z.object({ select: PatientBillsSelectObjectSchema.optional(), include: PatientBillsIncludeObjectSchema.optional(), where: PatientBillsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PatientBillsFindUniqueArgs>;

export const PatientBillsFindUniqueZodSchema = z.object({ select: PatientBillsSelectObjectSchema.optional(), include: PatientBillsIncludeObjectSchema.optional(), where: PatientBillsWhereUniqueInputObjectSchema }).strict();