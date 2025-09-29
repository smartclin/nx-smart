import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ServicesCountOrderByAggregateInputObjectSchema as ServicesCountOrderByAggregateInputObjectSchema } from './ServicesCountOrderByAggregateInput.schema';
import { ServicesAvgOrderByAggregateInputObjectSchema as ServicesAvgOrderByAggregateInputObjectSchema } from './ServicesAvgOrderByAggregateInput.schema';
import { ServicesMaxOrderByAggregateInputObjectSchema as ServicesMaxOrderByAggregateInputObjectSchema } from './ServicesMaxOrderByAggregateInput.schema';
import { ServicesMinOrderByAggregateInputObjectSchema as ServicesMinOrderByAggregateInputObjectSchema } from './ServicesMinOrderByAggregateInput.schema';
import { ServicesSumOrderByAggregateInputObjectSchema as ServicesSumOrderByAggregateInputObjectSchema } from './ServicesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  serviceName: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  category: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isAvailable: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ServicesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ServicesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ServicesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ServicesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ServicesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ServicesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ServicesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesOrderByWithAggregationInput>;
export const ServicesOrderByWithAggregationInputObjectZodSchema = makeSchema();
