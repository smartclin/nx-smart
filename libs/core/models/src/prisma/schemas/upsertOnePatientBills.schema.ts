import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsSelectObjectSchema as PatientBillsSelectObjectSchema } from './objects/PatientBillsSelect.schema';
import { PatientBillsIncludeObjectSchema as PatientBillsIncludeObjectSchema } from './objects/PatientBillsInclude.schema';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './objects/PatientBillsWhereUniqueInput.schema';
import { PatientBillsCreateInputObjectSchema as PatientBillsCreateInputObjectSchema } from './objects/PatientBillsCreateInput.schema';
import { PatientBillsUncheckedCreateInputObjectSchema as PatientBillsUncheckedCreateInputObjectSchema } from './objects/PatientBillsUncheckedCreateInput.schema';
import { PatientBillsUpdateInputObjectSchema as PatientBillsUpdateInputObjectSchema } from './objects/PatientBillsUpdateInput.schema';
import { PatientBillsUncheckedUpdateInputObjectSchema as PatientBillsUncheckedUpdateInputObjectSchema } from './objects/PatientBillsUncheckedUpdateInput.schema';

export const PatientBillsUpsertOneSchema: z.ZodType<Prisma.PatientBillsUpsertArgs> = z.object({ select: PatientBillsSelectObjectSchema.optional(), include: PatientBillsIncludeObjectSchema.optional(), where: PatientBillsWhereUniqueInputObjectSchema, create: z.union([ PatientBillsCreateInputObjectSchema, PatientBillsUncheckedCreateInputObjectSchema ]), update: z.union([ PatientBillsUpdateInputObjectSchema, PatientBillsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PatientBillsUpsertArgs>;

export const PatientBillsUpsertOneZodSchema = z.object({ select: PatientBillsSelectObjectSchema.optional(), include: PatientBillsIncludeObjectSchema.optional(), where: PatientBillsWhereUniqueInputObjectSchema, create: z.union([ PatientBillsCreateInputObjectSchema, PatientBillsUncheckedCreateInputObjectSchema ]), update: z.union([ PatientBillsUpdateInputObjectSchema, PatientBillsUncheckedUpdateInputObjectSchema ]) }).strict();