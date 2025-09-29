import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsSelectObjectSchema as MedicalRecordsSelectObjectSchema } from './objects/MedicalRecordsSelect.schema';
import { MedicalRecordsUpdateManyMutationInputObjectSchema as MedicalRecordsUpdateManyMutationInputObjectSchema } from './objects/MedicalRecordsUpdateManyMutationInput.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './objects/MedicalRecordsWhereInput.schema';

export const MedicalRecordsUpdateManyAndReturnSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyAndReturnArgs> = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), data: MedicalRecordsUpdateManyMutationInputObjectSchema, where: MedicalRecordsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateManyAndReturnArgs>;

export const MedicalRecordsUpdateManyAndReturnZodSchema = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), data: MedicalRecordsUpdateManyMutationInputObjectSchema, where: MedicalRecordsWhereInputObjectSchema.optional() }).strict();