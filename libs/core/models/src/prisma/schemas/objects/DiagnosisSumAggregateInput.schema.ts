import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  medicalId: z.literal(true).optional()
}).strict();
export const DiagnosisSumAggregateInputObjectSchema: z.ZodType<Prisma.DiagnosisSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisSumAggregateInputType>;
export const DiagnosisSumAggregateInputObjectZodSchema = makeSchema();
