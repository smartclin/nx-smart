import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsSelectObjectSchema as PatientBillsSelectObjectSchema } from './objects/PatientBillsSelect.schema';
import { PatientBillsUpdateManyMutationInputObjectSchema as PatientBillsUpdateManyMutationInputObjectSchema } from './objects/PatientBillsUpdateManyMutationInput.schema';
import { PatientBillsWhereInputObjectSchema as PatientBillsWhereInputObjectSchema } from './objects/PatientBillsWhereInput.schema';

export const PatientBillsUpdateManyAndReturnSchema: z.ZodType<Prisma.PatientBillsUpdateManyAndReturnArgs> = z.object({ select: PatientBillsSelectObjectSchema.optional(), data: PatientBillsUpdateManyMutationInputObjectSchema, where: PatientBillsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PatientBillsUpdateManyAndReturnArgs>;

export const PatientBillsUpdateManyAndReturnZodSchema = z.object({ select: PatientBillsSelectObjectSchema.optional(), data: PatientBillsUpdateManyMutationInputObjectSchema, where: PatientBillsWhereInputObjectSchema.optional() }).strict();