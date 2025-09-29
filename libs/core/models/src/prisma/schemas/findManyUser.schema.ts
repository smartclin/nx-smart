import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindManySelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    phone: z.boolean().optional(),
    birthDate: z.boolean().optional(),
    gender: z.boolean().optional(),
    displayUsername: z.boolean().optional(),
    sessions: z.boolean().optional(),
    accounts: z.boolean().optional(),
    Notification: z.boolean().optional(),
    Staff: z.boolean().optional(),
    Doctor: z.boolean().optional(),
    Patient: z.boolean().optional(),
    twoFactorEnabled: z.boolean().optional(),
    role: z.boolean().optional(),
    banned: z.boolean().optional(),
    banReason: z.boolean().optional(),
    banExpires: z.boolean().optional(),
    twofactors: z.boolean().optional(),
    avatarId: z.boolean().optional(),
    avatar: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    uploads: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    phone: z.boolean().optional(),
    birthDate: z.boolean().optional(),
    gender: z.boolean().optional(),
    displayUsername: z.boolean().optional(),
    sessions: z.boolean().optional(),
    accounts: z.boolean().optional(),
    Notification: z.boolean().optional(),
    Staff: z.boolean().optional(),
    Doctor: z.boolean().optional(),
    Patient: z.boolean().optional(),
    twoFactorEnabled: z.boolean().optional(),
    role: z.boolean().optional(),
    banned: z.boolean().optional(),
    banReason: z.boolean().optional(),
    banExpires: z.boolean().optional(),
    twofactors: z.boolean().optional(),
    avatarId: z.boolean().optional(),
    avatar: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    uploads: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UserFindManySchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({ select: UserFindManySelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindManyArgs>;

export const UserFindManyZodSchema = z.object({ select: UserFindManySelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();