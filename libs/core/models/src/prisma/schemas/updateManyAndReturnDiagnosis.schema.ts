import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisSelectObjectSchema as DiagnosisSelectObjectSchema } from './objects/DiagnosisSelect.schema';
import { DiagnosisUpdateManyMutationInputObjectSchema as DiagnosisUpdateManyMutationInputObjectSchema } from './objects/DiagnosisUpdateManyMutationInput.schema';
import { DiagnosisWhereInputObjectSchema as DiagnosisWhereInputObjectSchema } from './objects/DiagnosisWhereInput.schema';

export const DiagnosisUpdateManyAndReturnSchema: z.ZodType<Prisma.DiagnosisUpdateManyAndReturnArgs> = z.object({ select: DiagnosisSelectObjectSchema.optional(), data: DiagnosisUpdateManyMutationInputObjectSchema, where: DiagnosisWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiagnosisUpdateManyAndReturnArgs>;

export const DiagnosisUpdateManyAndReturnZodSchema = z.object({ select: DiagnosisSelectObjectSchema.optional(), data: DiagnosisUpdateManyMutationInputObjectSchema, where: DiagnosisWhereInputObjectSchema.optional() }).strict();