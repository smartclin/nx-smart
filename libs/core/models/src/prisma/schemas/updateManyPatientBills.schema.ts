import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsUpdateManyMutationInputObjectSchema as PatientBillsUpdateManyMutationInputObjectSchema } from './objects/PatientBillsUpdateManyMutationInput.schema';
import { PatientBillsWhereInputObjectSchema as PatientBillsWhereInputObjectSchema } from './objects/PatientBillsWhereInput.schema';

export const PatientBillsUpdateManySchema: z.ZodType<Prisma.PatientBillsUpdateManyArgs> = z.object({ data: PatientBillsUpdateManyMutationInputObjectSchema, where: PatientBillsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PatientBillsUpdateManyArgs>;

export const PatientBillsUpdateManyZodSchema = z.object({ data: PatientBillsUpdateManyMutationInputObjectSchema, where: PatientBillsWhereInputObjectSchema.optional() }).strict();