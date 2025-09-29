import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  adminId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const FileMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileMaxOrderByAggregateInput>;
export const FileMaxOrderByAggregateInputObjectZodSchema = makeSchema();
