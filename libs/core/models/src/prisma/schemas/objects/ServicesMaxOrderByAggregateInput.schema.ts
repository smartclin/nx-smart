import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  serviceName: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  duration: SortOrderSchema.optional(),
  isAvailable: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ServicesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServicesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesMaxOrderByAggregateInput>;
export const ServicesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
