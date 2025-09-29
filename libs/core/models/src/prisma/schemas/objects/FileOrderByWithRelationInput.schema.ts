import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { AdminOrderByWithRelationInputObjectSchema as AdminOrderByWithRelationInputObjectSchema } from './AdminOrderByWithRelationInput.schema';
import { AdminOrderByRelationAggregateInputObjectSchema as AdminOrderByRelationAggregateInputObjectSchema } from './AdminOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema as UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema'

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
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  admin: z.lazy(() => AdminOrderByWithRelationInputObjectSchema).optional(),
  admins: z.lazy(() => AdminOrderByRelationAggregateInputObjectSchema).optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const FileOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FileOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FileOrderByWithRelationInput>;
export const FileOrderByWithRelationInputObjectZodSchema = makeSchema();
