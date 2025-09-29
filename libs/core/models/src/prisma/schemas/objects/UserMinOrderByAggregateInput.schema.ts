import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  birthDate: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  displayUsername: SortOrderSchema.optional(),
  twoFactorEnabled: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  banned: SortOrderSchema.optional(),
  banReason: SortOrderSchema.optional(),
  banExpires: SortOrderSchema.optional(),
  avatarId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserMinOrderByAggregateInput>;
export const UserMinOrderByAggregateInputObjectZodSchema = makeSchema();
