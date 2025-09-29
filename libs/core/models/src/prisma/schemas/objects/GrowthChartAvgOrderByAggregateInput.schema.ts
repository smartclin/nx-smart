import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ageInDays: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  headCircumference: SortOrderSchema.optional(),
  percentileHeight: SortOrderSchema.optional(),
  percentileWeight: SortOrderSchema.optional(),
  percentileHead: SortOrderSchema.optional(),
  heightZScore: SortOrderSchema.optional(),
  weightZScore: SortOrderSchema.optional()
}).strict();
export const GrowthChartAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GrowthChartAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartAvgOrderByAggregateInput>;
export const GrowthChartAvgOrderByAggregateInputObjectZodSchema = makeSchema();
