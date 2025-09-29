import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReminderCountOrderByAggregateInputObjectSchema as ReminderCountOrderByAggregateInputObjectSchema } from './ReminderCountOrderByAggregateInput.schema';
import { ReminderAvgOrderByAggregateInputObjectSchema as ReminderAvgOrderByAggregateInputObjectSchema } from './ReminderAvgOrderByAggregateInput.schema';
import { ReminderMaxOrderByAggregateInputObjectSchema as ReminderMaxOrderByAggregateInputObjectSchema } from './ReminderMaxOrderByAggregateInput.schema';
import { ReminderMinOrderByAggregateInputObjectSchema as ReminderMinOrderByAggregateInputObjectSchema } from './ReminderMinOrderByAggregateInput.schema';
import { ReminderSumOrderByAggregateInputObjectSchema as ReminderSumOrderByAggregateInputObjectSchema } from './ReminderSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  sentAt: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  _count: z.lazy(() => ReminderCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReminderAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReminderMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReminderMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReminderSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReminderOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReminderOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderOrderByWithAggregationInput>;
export const ReminderOrderByWithAggregationInputObjectZodSchema = makeSchema();
