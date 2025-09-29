import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisWhereInputObjectSchema as DiagnosisWhereInputObjectSchema } from './objects/DiagnosisWhereInput.schema';

export const DiagnosisDeleteManySchema: z.ZodType<Prisma.DiagnosisDeleteManyArgs> = z.object({ where: DiagnosisWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiagnosisDeleteManyArgs>;

export const DiagnosisDeleteManyZodSchema = z.object({ where: DiagnosisWhereInputObjectSchema.optional() }).strict();