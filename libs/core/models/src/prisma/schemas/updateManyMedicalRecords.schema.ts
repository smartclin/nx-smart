import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsUpdateManyMutationInputObjectSchema as MedicalRecordsUpdateManyMutationInputObjectSchema } from './objects/MedicalRecordsUpdateManyMutationInput.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './objects/MedicalRecordsWhereInput.schema';

export const MedicalRecordsUpdateManySchema: z.ZodType<Prisma.MedicalRecordsUpdateManyArgs> = z.object({ data: MedicalRecordsUpdateManyMutationInputObjectSchema, where: MedicalRecordsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateManyArgs>;

export const MedicalRecordsUpdateManyZodSchema = z.object({ data: MedicalRecordsUpdateManyMutationInputObjectSchema, where: MedicalRecordsWhereInputObjectSchema.optional() }).strict();