import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  appointmentId: z.literal(true).optional(),
  amount: z.literal(true).optional()
}).strict();
export const BillingAvgAggregateInputObjectSchema: z.ZodType<Prisma.BillingAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BillingAvgAggregateInputType>;
export const BillingAvgAggregateInputObjectZodSchema = makeSchema();
