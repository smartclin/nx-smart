import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  medicalRecordId: z.literal(true).optional()
}).strict();
export const PrescriptionAvgAggregateInputObjectSchema: z.ZodType<Prisma.PrescriptionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionAvgAggregateInputType>;
export const PrescriptionAvgAggregateInputObjectZodSchema = makeSchema();
