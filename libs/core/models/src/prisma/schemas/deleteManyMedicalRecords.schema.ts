import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './objects/MedicalRecordsWhereInput.schema';

export const MedicalRecordsDeleteManySchema: z.ZodType<Prisma.MedicalRecordsDeleteManyArgs> = z.object({ where: MedicalRecordsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsDeleteManyArgs>;

export const MedicalRecordsDeleteManyZodSchema = z.object({ where: MedicalRecordsWhereInputObjectSchema.optional() }).strict();