import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisSelectObjectSchema as DiagnosisSelectObjectSchema } from './objects/DiagnosisSelect.schema';
import { DiagnosisIncludeObjectSchema as DiagnosisIncludeObjectSchema } from './objects/DiagnosisInclude.schema';
import { DiagnosisCreateInputObjectSchema as DiagnosisCreateInputObjectSchema } from './objects/DiagnosisCreateInput.schema';
import { DiagnosisUncheckedCreateInputObjectSchema as DiagnosisUncheckedCreateInputObjectSchema } from './objects/DiagnosisUncheckedCreateInput.schema';

export const DiagnosisCreateOneSchema: z.ZodType<Prisma.DiagnosisCreateArgs> = z.object({ select: DiagnosisSelectObjectSchema.optional(), include: DiagnosisIncludeObjectSchema.optional(), data: z.union([DiagnosisCreateInputObjectSchema, DiagnosisUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DiagnosisCreateArgs>;

export const DiagnosisCreateOneZodSchema = z.object({ select: DiagnosisSelectObjectSchema.optional(), include: DiagnosisIncludeObjectSchema.optional(), data: z.union([DiagnosisCreateInputObjectSchema, DiagnosisUncheckedCreateInputObjectSchema]) }).strict();