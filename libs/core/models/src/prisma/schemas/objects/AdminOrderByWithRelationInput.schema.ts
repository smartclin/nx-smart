import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FileOrderByWithRelationInputObjectSchema as FileOrderByWithRelationInputObjectSchema } from './FileOrderByWithRelationInput.schema';
import { FileOrderByRelationAggregateInputObjectSchema as FileOrderByRelationAggregateInputObjectSchema } from './FileOrderByRelationAggregateInput.schema'

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
  avatar: z.lazy(() => FileOrderByWithRelationInputObjectSchema).optional(),
  uploads: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AdminOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AdminOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminOrderByWithRelationInput>;
export const AdminOrderByWithRelationInputObjectZodSchema = makeSchema();
