import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisSelectObjectSchema as DiagnosisSelectObjectSchema } from './objects/DiagnosisSelect.schema';
import { DiagnosisIncludeObjectSchema as DiagnosisIncludeObjectSchema } from './objects/DiagnosisInclude.schema';
import { DiagnosisUpdateInputObjectSchema as DiagnosisUpdateInputObjectSchema } from './objects/DiagnosisUpdateInput.schema';
import { DiagnosisUncheckedUpdateInputObjectSchema as DiagnosisUncheckedUpdateInputObjectSchema } from './objects/DiagnosisUncheckedUpdateInput.schema';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './objects/DiagnosisWhereUniqueInput.schema';

export const DiagnosisUpdateOneSchema: z.ZodType<Prisma.DiagnosisUpdateArgs> = z.object({ select: DiagnosisSelectObjectSchema.optional(), include: DiagnosisIncludeObjectSchema.optional(), data: z.union([DiagnosisUpdateInputObjectSchema, DiagnosisUncheckedUpdateInputObjectSchema]), where: DiagnosisWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiagnosisUpdateArgs>;

export const DiagnosisUpdateOneZodSchema = z.object({ select: DiagnosisSelectObjectSchema.optional(), include: DiagnosisIncludeObjectSchema.optional(), data: z.union([DiagnosisUpdateInputObjectSchema, DiagnosisUncheckedUpdateInputObjectSchema]), where: DiagnosisWhereUniqueInputObjectSchema }).strict();