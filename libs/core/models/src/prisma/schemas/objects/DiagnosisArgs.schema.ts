import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisSelectObjectSchema as DiagnosisSelectObjectSchema } from './DiagnosisSelect.schema';
import { DiagnosisIncludeObjectSchema as DiagnosisIncludeObjectSchema } from './DiagnosisInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DiagnosisSelectObjectSchema).optional(),
  include: z.lazy(() => DiagnosisIncludeObjectSchema).optional()
}).strict();
export const DiagnosisArgsObjectSchema = makeSchema();
export const DiagnosisArgsObjectZodSchema = makeSchema();
