import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FileIncludeObjectSchema as FileIncludeObjectSchema } from './objects/FileInclude.schema';
import { FileOrderByWithRelationInputObjectSchema as FileOrderByWithRelationInputObjectSchema } from './objects/FileOrderByWithRelationInput.schema';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './objects/FileWhereInput.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './objects/FileWhereUniqueInput.schema';
import { FileScalarFieldEnumSchema } from './enums/FileScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FileFindFirstOrThrowSelectSchema: z.ZodType<Prisma.FileSelect> = z.object({
    id: z.boolean().optional(),
    key: z.boolean().optional(),
    size: z.boolean().optional(),
    type: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    admin: z.boolean().optional(),
    adminId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    admins: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FileSelect>;

export const FileFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    key: z.boolean().optional(),
    size: z.boolean().optional(),
    type: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    admin: z.boolean().optional(),
    adminId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    admins: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const FileFindFirstOrThrowSchema: z.ZodType<Prisma.FileFindFirstOrThrowArgs> = z.object({ select: FileFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => FileIncludeObjectSchema.optional()), orderBy: z.union([FileOrderByWithRelationInputObjectSchema, FileOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileWhereInputObjectSchema.optional(), cursor: FileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FileScalarFieldEnumSchema, FileScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FileFindFirstOrThrowArgs>;

export const FileFindFirstOrThrowZodSchema = z.object({ select: FileFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => FileIncludeObjectSchema.optional()), orderBy: z.union([FileOrderByWithRelationInputObjectSchema, FileOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileWhereInputObjectSchema.optional(), cursor: FileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FileScalarFieldEnumSchema, FileScalarFieldEnumSchema.array()]).optional() }).strict();