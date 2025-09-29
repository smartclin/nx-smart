import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  accountId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  accessToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  refreshToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  idToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  accessTokenExpiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  refreshTokenExpiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scope: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  password: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AccountOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountOrderByWithRelationInput>;
export const AccountOrderByWithRelationInputObjectZodSchema = makeSchema();
