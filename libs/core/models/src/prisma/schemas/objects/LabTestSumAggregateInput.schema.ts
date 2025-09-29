import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  recordId: z.literal(true).optional(),
  serviceId: z.literal(true).optional()
}).strict();
export const LabTestSumAggregateInputObjectSchema: z.ZodType<Prisma.LabTestSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LabTestSumAggregateInputType>;
export const LabTestSumAggregateInputObjectZodSchema = makeSchema();
