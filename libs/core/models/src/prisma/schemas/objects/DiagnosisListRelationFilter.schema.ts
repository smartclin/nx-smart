import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisWhereInputObjectSchema as DiagnosisWhereInputObjectSchema } from './DiagnosisWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DiagnosisWhereInputObjectSchema).optional(),
  some: z.lazy(() => DiagnosisWhereInputObjectSchema).optional(),
  none: z.lazy(() => DiagnosisWhereInputObjectSchema).optional()
}).strict();
export const DiagnosisListRelationFilterObjectSchema: z.ZodType<Prisma.DiagnosisListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisListRelationFilter>;
export const DiagnosisListRelationFilterObjectZodSchema = makeSchema();
