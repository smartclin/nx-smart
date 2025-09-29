import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GrowthChartCountOrderByAggregateInputObjectSchema as GrowthChartCountOrderByAggregateInputObjectSchema } from './GrowthChartCountOrderByAggregateInput.schema';
import { GrowthChartAvgOrderByAggregateInputObjectSchema as GrowthChartAvgOrderByAggregateInputObjectSchema } from './GrowthChartAvgOrderByAggregateInput.schema';
import { GrowthChartMaxOrderByAggregateInputObjectSchema as GrowthChartMaxOrderByAggregateInputObjectSchema } from './GrowthChartMaxOrderByAggregateInput.schema';
import { GrowthChartMinOrderByAggregateInputObjectSchema as GrowthChartMinOrderByAggregateInputObjectSchema } from './GrowthChartMinOrderByAggregateInput.schema';
import { GrowthChartSumOrderByAggregateInputObjectSchema as GrowthChartSumOrderByAggregateInputObjectSchema } from './GrowthChartSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  date: SortOrderSchema.optional(),
  ageInDays: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  headCircumference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  percentileHeight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  percentileWeight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  percentileHead: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  measuredById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  heightZScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  weightZScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => GrowthChartCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GrowthChartAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GrowthChartMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GrowthChartMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GrowthChartSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GrowthChartOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GrowthChartOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartOrderByWithAggregationInput>;
export const GrowthChartOrderByWithAggregationInputObjectZodSchema = makeSchema();
