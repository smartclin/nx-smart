import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  sd4neg: SortOrderSchema.optional(),
  sd4pos: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WHOGrowthStandardCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WHOGrowthStandardCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WHOGrowthStandardCountOrderByAggregateInput>;
export const WHOGrowthStandardCountOrderByAggregateInputObjectZodSchema = makeSchema();
