import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsSelectObjectSchema as MedicalRecordsSelectObjectSchema } from './objects/MedicalRecordsSelect.schema';
import { MedicalRecordsCreateManyInputObjectSchema as MedicalRecordsCreateManyInputObjectSchema } from './objects/MedicalRecordsCreateManyInput.schema';

export const MedicalRecordsCreateManyAndReturnSchema: z.ZodType<Prisma.MedicalRecordsCreateManyAndReturnArgs> = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), data: z.union([ MedicalRecordsCreateManyInputObjectSchema, z.array(MedicalRecordsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsCreateManyAndReturnArgs>;

export const MedicalRecordsCreateManyAndReturnZodSchema = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), data: z.union([ MedicalRecordsCreateManyInputObjectSchema, z.array(MedicalRecordsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();