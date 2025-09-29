import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  appointmentId: SortOrderSchema.optional()
}).strict();
export const ReminderAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReminderAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderAvgOrderByAggregateInput>;
export const ReminderAvgOrderByAggregateInputObjectZodSchema = makeSchema();
