import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsSelectObjectSchema as MedicalRecordsSelectObjectSchema } from './objects/MedicalRecordsSelect.schema';
import { MedicalRecordsIncludeObjectSchema as MedicalRecordsIncludeObjectSchema } from './objects/MedicalRecordsInclude.schema';
import { MedicalRecordsCreateInputObjectSchema as MedicalRecordsCreateInputObjectSchema } from './objects/MedicalRecordsCreateInput.schema';
import { MedicalRecordsUncheckedCreateInputObjectSchema as MedicalRecordsUncheckedCreateInputObjectSchema } from './objects/MedicalRecordsUncheckedCreateInput.schema';

export const MedicalRecordsCreateOneSchema: z.ZodType<Prisma.MedicalRecordsCreateArgs> = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), include: MedicalRecordsIncludeObjectSchema.optional(), data: z.union([MedicalRecordsCreateInputObjectSchema, MedicalRecordsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsCreateArgs>;

export const MedicalRecordsCreateOneZodSchema = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), include: MedicalRecordsIncludeObjectSchema.optional(), data: z.union([MedicalRecordsCreateInputObjectSchema, MedicalRecordsUncheckedCreateInputObjectSchema]) }).strict();