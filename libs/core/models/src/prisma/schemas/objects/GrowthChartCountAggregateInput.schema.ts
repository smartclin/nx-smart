import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  gender: z.literal(true).optional(),
  date: z.literal(true).optional(),
  ageInDays: z.literal(true).optional(),
  height: z.literal(true).optional(),
  weight: z.literal(true).optional(),
  headCircumference: z.literal(true).optional(),
  percentileHeight: z.literal(true).optional(),
  percentileWeight: z.literal(true).optional(),
  percentileHead: z.literal(true).optional(),
  measuredById: z.literal(true).optional(),
  heightZScore: z.literal(true).optional(),
  weightZScore: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GrowthChartCountAggregateInputObjectSchema: z.ZodType<Prisma.GrowthChartCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartCountAggregateInputType>;
export const GrowthChartCountAggregateInputObjectZodSchema = makeSchema();
