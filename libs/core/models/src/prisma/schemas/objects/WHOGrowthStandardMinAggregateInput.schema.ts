import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  ageInMonths: z.literal(true).optional(),
  gender: z.literal(true).optional(),
  measurementType: z.literal(true).optional(),
  lValue: z.literal(true).optional(),
  mValue: z.literal(true).optional(),
  sValue: z.literal(true).optional(),
  sd0: z.literal(true).optional(),
  sd1neg: z.literal(true).optional(),
  sd1pos: z.literal(true).optional(),
  sd2neg: z.literal(true).optional(),
  sd2pos: z.literal(true).optional(),
  sd3neg: z.literal(true).optional(),
  sd3pos: z.literal(true).optional(),
  sd4neg: z.literal(true).optional(),
  sd4pos: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const WHOGrowthStandardMinAggregateInputObjectSchema: z.ZodType<Prisma.WHOGrowthStandardMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WHOGrowthStandardMinAggregateInputType>;
export const WHOGrowthStandardMinAggregateInputObjectZodSchema = makeSchema();
