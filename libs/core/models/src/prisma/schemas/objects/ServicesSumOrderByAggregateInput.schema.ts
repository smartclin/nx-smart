import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  duration: SortOrderSchema.optional()
}).strict();
export const ServicesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServicesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesSumOrderByAggregateInput>;
export const ServicesSumOrderByAggregateInputObjectZodSchema = makeSchema();
