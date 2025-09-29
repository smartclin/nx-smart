import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  recordId: z.literal(true).optional(),
  testDate: z.literal(true).optional(),
  result: z.literal(true).optional(),
  status: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  serviceId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LabTestCountAggregateInputObjectSchema: z.ZodType<Prisma.LabTestCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCountAggregateInputType>;
export const LabTestCountAggregateInputObjectZodSchema = makeSchema();
