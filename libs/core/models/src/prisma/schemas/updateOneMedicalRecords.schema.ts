import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsSelectObjectSchema as MedicalRecordsSelectObjectSchema } from './objects/MedicalRecordsSelect.schema';
import { MedicalRecordsIncludeObjectSchema as MedicalRecordsIncludeObjectSchema } from './objects/MedicalRecordsInclude.schema';
import { MedicalRecordsUpdateInputObjectSchema as MedicalRecordsUpdateInputObjectSchema } from './objects/MedicalRecordsUpdateInput.schema';
import { MedicalRecordsUncheckedUpdateInputObjectSchema as MedicalRecordsUncheckedUpdateInputObjectSchema } from './objects/MedicalRecordsUncheckedUpdateInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './objects/MedicalRecordsWhereUniqueInput.schema';

export const MedicalRecordsUpdateOneSchema: z.ZodType<Prisma.MedicalRecordsUpdateArgs> = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), include: MedicalRecordsIncludeObjectSchema.optional(), data: z.union([MedicalRecordsUpdateInputObjectSchema, MedicalRecordsUncheckedUpdateInputObjectSchema]), where: MedicalRecordsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateArgs>;

export const MedicalRecordsUpdateOneZodSchema = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), include: MedicalRecordsIncludeObjectSchema.optional(), data: z.union([MedicalRecordsUpdateInputObjectSchema, MedicalRecordsUncheckedUpdateInputObjectSchema]), where: MedicalRecordsWhereUniqueInputObjectSchema }).strict();