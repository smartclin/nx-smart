import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  ageInDays: z.literal(true).optional(),
  height: z.literal(true).optional(),
  weight: z.literal(true).optional(),
  headCircumference: z.literal(true).optional(),
  percentileHeight: z.literal(true).optional(),
  percentileWeight: z.literal(true).optional(),
  percentileHead: z.literal(true).optional(),
  heightZScore: z.literal(true).optional(),
  weightZScore: z.literal(true).optional()
}).strict();
export const GrowthChartSumAggregateInputObjectSchema: z.ZodType<Prisma.GrowthChartSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartSumAggregateInputType>;
export const GrowthChartSumAggregateInputObjectZodSchema = makeSchema();
