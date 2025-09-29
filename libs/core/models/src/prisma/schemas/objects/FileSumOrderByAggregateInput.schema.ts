import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional()
}).strict();
export const FileSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileSumOrderByAggregateInput>;
export const FileSumOrderByAggregateInputObjectZodSchema = makeSchema();
