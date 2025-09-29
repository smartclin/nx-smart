import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisSelectObjectSchema as DiagnosisSelectObjectSchema } from './objects/DiagnosisSelect.schema';
import { DiagnosisIncludeObjectSchema as DiagnosisIncludeObjectSchema } from './objects/DiagnosisInclude.schema';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './objects/DiagnosisWhereUniqueInput.schema';

export const DiagnosisFindUniqueSchema: z.ZodType<Prisma.DiagnosisFindUniqueArgs> = z.object({ select: DiagnosisSelectObjectSchema.optional(), include: DiagnosisIncludeObjectSchema.optional(), where: DiagnosisWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DiagnosisFindUniqueArgs>;

export const DiagnosisFindUniqueZodSchema = z.object({ select: DiagnosisSelectObjectSchema.optional(), include: DiagnosisIncludeObjectSchema.optional(), where: DiagnosisWhereUniqueInputObjectSchema }).strict();