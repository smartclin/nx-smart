import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FeedingLogCountOrderByAggregateInputObjectSchema as FeedingLogCountOrderByAggregateInputObjectSchema } from './FeedingLogCountOrderByAggregateInput.schema';
import { FeedingLogAvgOrderByAggregateInputObjectSchema as FeedingLogAvgOrderByAggregateInputObjectSchema } from './FeedingLogAvgOrderByAggregateInput.schema';
import { FeedingLogMaxOrderByAggregateInputObjectSchema as FeedingLogMaxOrderByAggregateInputObjectSchema } from './FeedingLogMaxOrderByAggregateInput.schema';
import { FeedingLogMinOrderByAggregateInputObjectSchema as FeedingLogMinOrderByAggregateInputObjectSchema } from './FeedingLogMinOrderByAggregateInput.schema';
import { FeedingLogSumOrderByAggregateInputObjectSchema as FeedingLogSumOrderByAggregateInputObjectSchema } from './FeedingLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  breast: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => FeedingLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FeedingLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FeedingLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FeedingLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FeedingLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FeedingLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FeedingLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogOrderByWithAggregationInput>;
export const FeedingLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
