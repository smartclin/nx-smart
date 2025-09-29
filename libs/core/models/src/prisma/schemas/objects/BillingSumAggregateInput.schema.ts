import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  appointmentId: z.literal(true).optional(),
  amount: z.literal(true).optional()
}).strict();
export const BillingSumAggregateInputObjectSchema: z.ZodType<Prisma.BillingSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BillingSumAggregateInputType>;
export const BillingSumAggregateInputObjectZodSchema = makeSchema();
