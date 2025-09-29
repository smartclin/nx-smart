import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsSelectObjectSchema as MedicalRecordsSelectObjectSchema } from './objects/MedicalRecordsSelect.schema';
import { MedicalRecordsIncludeObjectSchema as MedicalRecordsIncludeObjectSchema } from './objects/MedicalRecordsInclude.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './objects/MedicalRecordsWhereUniqueInput.schema';

export const MedicalRecordsFindUniqueOrThrowSchema: z.ZodType<Prisma.MedicalRecordsFindUniqueOrThrowArgs> = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), include: MedicalRecordsIncludeObjectSchema.optional(), where: MedicalRecordsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsFindUniqueOrThrowArgs>;

export const MedicalRecordsFindUniqueOrThrowZodSchema = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), include: MedicalRecordsIncludeObjectSchema.optional(), where: MedicalRecordsWhereUniqueInputObjectSchema }).strict();