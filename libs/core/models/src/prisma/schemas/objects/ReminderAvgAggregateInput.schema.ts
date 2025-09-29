import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  appointmentId: z.literal(true).optional()
}).strict();
export const ReminderAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReminderAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReminderAvgAggregateInputType>;
export const ReminderAvgAggregateInputObjectZodSchema = makeSchema();
