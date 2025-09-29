import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  billId: z.literal(true).optional(),
  serviceId: z.literal(true).optional(),
  serviceDate: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  unitCost: z.literal(true).optional(),
  totalCost: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const PatientBillsMinAggregateInputObjectSchema: z.ZodType<Prisma.PatientBillsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsMinAggregateInputType>;
export const PatientBillsMinAggregateInputObjectZodSchema = makeSchema();
