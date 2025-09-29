import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsSelectObjectSchema as PatientBillsSelectObjectSchema } from './objects/PatientBillsSelect.schema';
import { PatientBillsIncludeObjectSchema as PatientBillsIncludeObjectSchema } from './objects/PatientBillsInclude.schema';
import { PatientBillsUpdateInputObjectSchema as PatientBillsUpdateInputObjectSchema } from './objects/PatientBillsUpdateInput.schema';
import { PatientBillsUncheckedUpdateInputObjectSchema as PatientBillsUncheckedUpdateInputObjectSchema } from './objects/PatientBillsUncheckedUpdateInput.schema';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './objects/PatientBillsWhereUniqueInput.schema';

export const PatientBillsUpdateOneSchema: z.ZodType<Prisma.PatientBillsUpdateArgs> = z.object({ select: PatientBillsSelectObjectSchema.optional(), include: PatientBillsIncludeObjectSchema.optional(), data: z.union([PatientBillsUpdateInputObjectSchema, PatientBillsUncheckedUpdateInputObjectSchema]), where: PatientBillsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PatientBillsUpdateArgs>;

export const PatientBillsUpdateOneZodSchema = z.object({ select: PatientBillsSelectObjectSchema.optional(), include: PatientBillsIncludeObjectSchema.optional(), data: z.union([PatientBillsUpdateInputObjectSchema, PatientBillsUncheckedUpdateInputObjectSchema]), where: PatientBillsWhereUniqueInputObjectSchema }).strict();