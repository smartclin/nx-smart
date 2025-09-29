import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const GrowthChartOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.GrowthChartOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartOrderByRelationAggregateInput>;
export const GrowthChartOrderByRelationAggregateInputObjectZodSchema = makeSchema();
