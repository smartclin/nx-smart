import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisSelectObjectSchema as DiagnosisSelectObjectSchema } from './objects/DiagnosisSelect.schema';
import { DiagnosisCreateManyInputObjectSchema as DiagnosisCreateManyInputObjectSchema } from './objects/DiagnosisCreateManyInput.schema';

export const DiagnosisCreateManyAndReturnSchema: z.ZodType<Prisma.DiagnosisCreateManyAndReturnArgs> = z.object({ select: DiagnosisSelectObjectSchema.optional(), data: z.union([ DiagnosisCreateManyInputObjectSchema, z.array(DiagnosisCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DiagnosisCreateManyAndReturnArgs>;

export const DiagnosisCreateManyAndReturnZodSchema = z.object({ select: DiagnosisSelectObjectSchema.optional(), data: z.union([ DiagnosisCreateManyInputObjectSchema, z.array(DiagnosisCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();