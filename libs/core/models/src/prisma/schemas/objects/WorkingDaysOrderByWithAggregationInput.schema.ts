import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WorkingDaysCountOrderByAggregateInputObjectSchema as WorkingDaysCountOrderByAggregateInputObjectSchema } from './WorkingDaysCountOrderByAggregateInput.schema';
import { WorkingDaysAvgOrderByAggregateInputObjectSchema as WorkingDaysAvgOrderByAggregateInputObjectSchema } from './WorkingDaysAvgOrderByAggregateInput.schema';
import { WorkingDaysMaxOrderByAggregateInputObjectSchema as WorkingDaysMaxOrderByAggregateInputObjectSchema } from './WorkingDaysMaxOrderByAggregateInput.schema';
import { WorkingDaysMinOrderByAggregateInputObjectSchema as WorkingDaysMinOrderByAggregateInputObjectSchema } from './WorkingDaysMinOrderByAggregateInput.schema';
import { WorkingDaysSumOrderByAggregateInputObjectSchema as WorkingDaysSumOrderByAggregateInputObjectSchema } from './WorkingDaysSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  day: SortOrderSchema.optional(),
  startTime: SortOrderSchema.optional(),
  closeTime: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WorkingDaysCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WorkingDaysAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkingDaysMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkingDaysMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WorkingDaysSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkingDaysOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkingDaysOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysOrderByWithAggregationInput>;
export const WorkingDaysOrderByWithAggregationInputObjectZodSchema = makeSchema();
