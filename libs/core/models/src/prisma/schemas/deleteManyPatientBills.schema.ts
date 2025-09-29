import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsWhereInputObjectSchema as PatientBillsWhereInputObjectSchema } from './objects/PatientBillsWhereInput.schema';

export const PatientBillsDeleteManySchema: z.ZodType<Prisma.PatientBillsDeleteManyArgs> = z.object({ where: PatientBillsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PatientBillsDeleteManyArgs>;

export const PatientBillsDeleteManyZodSchema = z.object({ where: PatientBillsWhereInputObjectSchema.optional() }).strict();