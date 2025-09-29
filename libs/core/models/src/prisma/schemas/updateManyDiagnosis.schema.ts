import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisUpdateManyMutationInputObjectSchema as DiagnosisUpdateManyMutationInputObjectSchema } from './objects/DiagnosisUpdateManyMutationInput.schema';
import { DiagnosisWhereInputObjectSchema as DiagnosisWhereInputObjectSchema } from './objects/DiagnosisWhereInput.schema';

export const DiagnosisUpdateManySchema: z.ZodType<Prisma.DiagnosisUpdateManyArgs> = z.object({ data: DiagnosisUpdateManyMutationInputObjectSchema, where: DiagnosisWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiagnosisUpdateManyArgs>;

export const DiagnosisUpdateManyZodSchema = z.object({ data: DiagnosisUpdateManyMutationInputObjectSchema, where: DiagnosisWhereInputObjectSchema.optional() }).strict();