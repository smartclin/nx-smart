import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisSelectObjectSchema as DiagnosisSelectObjectSchema } from './objects/DiagnosisSelect.schema';
import { DiagnosisIncludeObjectSchema as DiagnosisIncludeObjectSchema } from './objects/DiagnosisInclude.schema';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './objects/DiagnosisWhereUniqueInput.schema';
import { DiagnosisCreateInputObjectSchema as DiagnosisCreateInputObjectSchema } from './objects/DiagnosisCreateInput.schema';
import { DiagnosisUncheckedCreateInputObjectSchema as DiagnosisUncheckedCreateInputObjectSchema } from './objects/DiagnosisUncheckedCreateInput.schema';
import { DiagnosisUpdateInputObjectSchema as DiagnosisUpdateInputObjectSchema } from './objects/DiagnosisUpdateInput.schema';
import { DiagnosisUncheckedUpdateInputObjectSchema as DiagnosisUncheckedUpdateInputObjectSchema } from './objects/DiagnosisUncheckedUpdateInput.schema';

export const DiagnosisUpsertOneSchema: z.ZodType<Prisma.DiagnosisUpsertArgs> = z.object({ select: DiagnosisSelectObjectSchema.optional(), include: DiagnosisIncludeObjectSchema.optional(), where: DiagnosisWhereUniqueInputObjectSchema, create: z.union([ DiagnosisCreateInputObjectSchema, DiagnosisUncheckedCreateInputObjectSchema ]), update: z.union([ DiagnosisUpdateInputObjectSchema, DiagnosisUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DiagnosisUpsertArgs>;

export const DiagnosisUpsertOneZodSchema = z.object({ select: DiagnosisSelectObjectSchema.optional(), include: DiagnosisIncludeObjectSchema.optional(), where: DiagnosisWhereUniqueInputObjectSchema, create: z.union([ DiagnosisCreateInputObjectSchema, DiagnosisUncheckedCreateInputObjectSchema ]), update: z.union([ DiagnosisUpdateInputObjectSchema, DiagnosisUncheckedUpdateInputObjectSchema ]) }).strict();