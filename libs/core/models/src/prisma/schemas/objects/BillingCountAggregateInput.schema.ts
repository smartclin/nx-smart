import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  appointmentId: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  status: z.literal(true).optional(),
  insurance: z.literal(true).optional(),
  insuranceId: z.literal(true).optional(),
  serviceDate: z.literal(true).optional(),
  dueDate: z.literal(true).optional(),
  paidDate: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BillingCountAggregateInputObjectSchema: z.ZodType<Prisma.BillingCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BillingCountAggregateInputType>;
export const BillingCountAggregateInputObjectZodSchema = makeSchema();
