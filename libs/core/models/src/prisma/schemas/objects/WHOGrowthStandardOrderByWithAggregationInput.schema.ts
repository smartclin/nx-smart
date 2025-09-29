import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WHOGrowthStandardCountOrderByAggregateInputObjectSchema as WHOGrowthStandardCountOrderByAggregateInputObjectSchema } from './WHOGrowthStandardCountOrderByAggregateInput.schema';
import { WHOGrowthStandardAvgOrderByAggregateInputObjectSchema as WHOGrowthStandardAvgOrderByAggregateInputObjectSchema } from './WHOGrowthStandardAvgOrderByAggregateInput.schema';
import { WHOGrowthStandardMaxOrderByAggregateInputObjectSchema as WHOGrowthStandardMaxOrderByAggregateInputObjectSchema } from './WHOGrowthStandardMaxOrderByAggregateInput.schema';
import { WHOGrowthStandardMinOrderByAggregateInputObjectSchema as WHOGrowthStandardMinOrderByAggregateInputObjectSchema } from './WHOGrowthStandardMinOrderByAggregateInput.schema';
import { WHOGrowthStandardSumOrderByAggregateInputObjectSchema as WHOGrowthStandardSumOrderByAggregateInputObjectSchema } from './WHOGrowthStandardSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ageInMonths: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  measurementType: SortOrderSchema.optional(),
  lValue: SortOrderSchema.optional(),
  mValue: SortOrderSchema.optional(),
  sValue: SortOrderSchema.optional(),
  sd0: SortOrderSchema.optional(),
  sd1neg: SortOrderSchema.optional(),
  sd1pos: SortOrderSchema.optional(),
  sd2neg: SortOrderSchema.optional(),
  sd2pos: SortOrderSchema.optional(),
  sd3neg: SortOrderSchema.optional(),
  sd3pos: SortOrderSchema.optional(),
  sd4neg: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sd4pos: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WHOGrowthStandardCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WHOGrowthStandardAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WHOGrowthStandardMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WHOGrowthStandardMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WHOGrowthStandardSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WHOGrowthStandardOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WHOGrowthStandardOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WHOGrowthStandardOrderByWithAggregationInput>;
export const WHOGrowthStandardOrderByWithAggregationInputObjectZodSchema = makeSchema();
