import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  medicalId: z.literal(true).optional()
}).strict();
export const DiagnosisAvgAggregateInputObjectSchema: z.ZodType<Prisma.DiagnosisAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisAvgAggregateInputType>;
export const DiagnosisAvgAggregateInputObjectZodSchema = makeSchema();
