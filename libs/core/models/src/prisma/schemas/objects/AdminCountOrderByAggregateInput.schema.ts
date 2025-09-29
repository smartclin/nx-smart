import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  birthDate: SortOrderSchema.optional(),
  avatarId: SortOrderSchema.optional(),
  isRoot: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AdminCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AdminCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCountOrderByAggregateInput>;
export const AdminCountOrderByAggregateInputObjectZodSchema = makeSchema();
