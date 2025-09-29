import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FileCountOrderByAggregateInputObjectSchema as FileCountOrderByAggregateInputObjectSchema } from './FileCountOrderByAggregateInput.schema';
import { FileAvgOrderByAggregateInputObjectSchema as FileAvgOrderByAggregateInputObjectSchema } from './FileAvgOrderByAggregateInput.schema';
import { FileMaxOrderByAggregateInputObjectSchema as FileMaxOrderByAggregateInputObjectSchema } from './FileMaxOrderByAggregateInput.schema';
import { FileMinOrderByAggregateInputObjectSchema as FileMinOrderByAggregateInputObjectSchema } from './FileMinOrderByAggregateInput.schema';
import { FileSumOrderByAggregateInputObjectSchema as FileSumOrderByAggregateInputObjectSchema } from './FileSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  adminId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => FileCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FileAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FileMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FileSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FileOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FileOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FileOrderByWithAggregationInput>;
export const FileOrderByWithAggregationInputObjectZodSchema = makeSchema();
