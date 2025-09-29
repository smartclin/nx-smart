import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  appointmentId: z.literal(true).optional()
}).strict();
export const ReminderSumAggregateInputObjectSchema: z.ZodType<Prisma.ReminderSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReminderSumAggregateInputType>;
export const ReminderSumAggregateInputObjectZodSchema = makeSchema();
