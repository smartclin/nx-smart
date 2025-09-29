import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

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
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WHOGrowthStandardOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WHOGrowthStandardOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WHOGrowthStandardOrderByWithRelationInput>;
export const WHOGrowthStandardOrderByWithRelationInputObjectZodSchema = makeSchema();
