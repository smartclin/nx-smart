import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional()
}).strict();
export const FileAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAvgOrderByAggregateInput>;
export const FileAvgOrderByAggregateInputObjectZodSchema = makeSchema();
