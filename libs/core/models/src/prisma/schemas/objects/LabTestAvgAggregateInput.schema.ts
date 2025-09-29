import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  recordId: z.literal(true).optional(),
  serviceId: z.literal(true).optional()
}).strict();
export const LabTestAvgAggregateInputObjectSchema: z.ZodType<Prisma.LabTestAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LabTestAvgAggregateInputType>;
export const LabTestAvgAggregateInputObjectZodSchema = makeSchema();
