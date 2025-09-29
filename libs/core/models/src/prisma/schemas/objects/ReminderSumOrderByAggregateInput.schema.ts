import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  appointmentId: SortOrderSchema.optional()
}).strict();
export const ReminderSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReminderSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderSumOrderByAggregateInput>;
export const ReminderSumOrderByAggregateInputObjectZodSchema = makeSchema();
