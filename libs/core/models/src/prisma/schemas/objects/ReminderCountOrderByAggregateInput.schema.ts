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
export const ReminderCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReminderCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderCountOrderByAggregateInput>;
export const ReminderCountOrderByAggregateInputObjectZodSchema = makeSchema();
