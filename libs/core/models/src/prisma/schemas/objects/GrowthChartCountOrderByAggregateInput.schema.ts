import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  ageInDays: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  headCircumference: SortOrderSchema.optional(),
  percentileHeight: SortOrderSchema.optional(),
  percentileWeight: SortOrderSchema.optional(),
  percentileHead: SortOrderSchema.optional(),
  measuredById: SortOrderSchema.optional(),
  heightZScore: SortOrderSchema.optional(),
  weightZScore: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional()
}).strict();
export const GrowthChartCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GrowthChartCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartCountOrderByAggregateInput>;
export const GrowthChartCountOrderByAggregateInputObjectZodSchema = makeSchema();
