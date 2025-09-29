import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  appointmentId: z.literal(true).optional(),
  method: z.literal(true).optional(),
  sentAt: z.literal(true).optional(),
  status: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ReminderCountAggregateInputObjectSchema: z.ZodType<Prisma.ReminderCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReminderCountAggregateInputType>;
export const ReminderCountAggregateInputObjectZodSchema = makeSchema();
