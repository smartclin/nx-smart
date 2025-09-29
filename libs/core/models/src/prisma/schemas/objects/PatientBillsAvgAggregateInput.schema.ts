import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  billId: z.literal(true).optional(),
  serviceId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  unitCost: z.literal(true).optional(),
  totalCost: z.literal(true).optional()
}).strict();
export const PatientBillsAvgAggregateInputObjectSchema: z.ZodType<Prisma.PatientBillsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsAvgAggregateInputType>;
export const PatientBillsAvgAggregateInputObjectZodSchema = makeSchema();
