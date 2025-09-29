import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AdminCountOrderByAggregateInputObjectSchema as AdminCountOrderByAggregateInputObjectSchema } from './AdminCountOrderByAggregateInput.schema';
import { AdminMaxOrderByAggregateInputObjectSchema as AdminMaxOrderByAggregateInputObjectSchema } from './AdminMaxOrderByAggregateInput.schema';
import { AdminMinOrderByAggregateInputObjectSchema as AdminMinOrderByAggregateInputObjectSchema } from './AdminMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  role: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  birthDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  avatarId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isRoot: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AdminCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AdminMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AdminMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AdminOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AdminOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminOrderByWithAggregationInput>;
export const AdminOrderByWithAggregationInputObjectZodSchema = makeSchema();
