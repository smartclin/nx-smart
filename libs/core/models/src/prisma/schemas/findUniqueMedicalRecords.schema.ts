import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsSelectObjectSchema as MedicalRecordsSelectObjectSchema } from './objects/MedicalRecordsSelect.schema';
import { MedicalRecordsIncludeObjectSchema as MedicalRecordsIncludeObjectSchema } from './objects/MedicalRecordsInclude.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './objects/MedicalRecordsWhereUniqueInput.schema';

export const MedicalRecordsFindUniqueSchema: z.ZodType<Prisma.MedicalRecordsFindUniqueArgs> = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), include: MedicalRecordsIncludeObjectSchema.optional(), where: MedicalRecordsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsFindUniqueArgs>;

export const MedicalRecordsFindUniqueZodSchema = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), include: MedicalRecordsIncludeObjectSchema.optional(), where: MedicalRecordsWhereUniqueInputObjectSchema }).strict();