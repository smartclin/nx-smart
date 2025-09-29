import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  sentAt: SortOrderSchema.optional(),
  status: SortOrderSchema.optional()
}).strict();
export const ReminderMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReminderMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderMinOrderByAggregateInput>;
export const ReminderMinOrderByAggregateInputObjectZodSchema = makeSchema();
