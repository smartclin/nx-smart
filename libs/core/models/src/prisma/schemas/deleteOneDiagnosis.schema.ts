import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisSelectObjectSchema as DiagnosisSelectObjectSchema } from './objects/DiagnosisSelect.schema';
import { DiagnosisIncludeObjectSchema as DiagnosisIncludeObjectSchema } from './objects/DiagnosisInclude.schema';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './objects/DiagnosisWhereUniqueInput.schema';

export const DiagnosisDeleteOneSchema: z.ZodType<Prisma.DiagnosisDeleteArgs> = z.object({ select: DiagnosisSelectObjectSchema.optional(), include: DiagnosisIncludeObjectSchema.optional(), where: DiagnosisWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiagnosisDeleteArgs>;

export const DiagnosisDeleteOneZodSchema = z.object({ select: DiagnosisSelectObjectSchema.optional(), include: DiagnosisIncludeObjectSchema.optional(), where: DiagnosisWhereUniqueInputObjectSchema }).strict();