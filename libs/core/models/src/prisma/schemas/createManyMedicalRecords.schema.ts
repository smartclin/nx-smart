import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsCreateManyInputObjectSchema as MedicalRecordsCreateManyInputObjectSchema } from './objects/MedicalRecordsCreateManyInput.schema';

export const MedicalRecordsCreateManySchema: z.ZodType<Prisma.MedicalRecordsCreateManyArgs> = z.object({ data: z.union([ MedicalRecordsCreateManyInputObjectSchema, z.array(MedicalRecordsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsCreateManyArgs>;

export const MedicalRecordsCreateManyZodSchema = z.object({ data: z.union([ MedicalRecordsCreateManyInputObjectSchema, z.array(MedicalRecordsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();