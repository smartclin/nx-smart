import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisCreateManyInputObjectSchema as DiagnosisCreateManyInputObjectSchema } from './objects/DiagnosisCreateManyInput.schema';

export const DiagnosisCreateManySchema: z.ZodType<Prisma.DiagnosisCreateManyArgs> = z.object({ data: z.union([ DiagnosisCreateManyInputObjectSchema, z.array(DiagnosisCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DiagnosisCreateManyArgs>;

export const DiagnosisCreateManyZodSchema = z.object({ data: z.union([ DiagnosisCreateManyInputObjectSchema, z.array(DiagnosisCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();