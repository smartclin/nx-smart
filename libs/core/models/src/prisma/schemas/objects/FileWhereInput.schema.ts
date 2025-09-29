import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumFileTypeFilterObjectSchema as EnumFileTypeFilterObjectSchema } from './EnumFileTypeFilter.schema';
import { FileTypeSchema } from '../enums/FileType.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { AdminNullableScalarRelationFilterObjectSchema as AdminNullableScalarRelationFilterObjectSchema } from './AdminNullableScalarRelationFilter.schema';
import { AdminWhereInputObjectSchema as AdminWhereInputObjectSchema } from './AdminWhereInput.schema';
import { AdminListRelationFilterObjectSchema as AdminListRelationFilterObjectSchema } from './AdminListRelationFilter.schema';
import { UserListRelationFilterObjectSchema as UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema'

const filewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FileWhereInputObjectSchema), z.lazy(() => FileWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FileWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FileWhereInputObjectSchema), z.lazy(() => FileWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => EnumFileTypeFilterObjectSchema), FileTypeSchema]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  adminId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  admin: z.union([z.lazy(() => AdminNullableScalarRelationFilterObjectSchema), z.lazy(() => AdminWhereInputObjectSchema)]).optional(),
  admins: z.lazy(() => AdminListRelationFilterObjectSchema).optional(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional()
}).strict();
export const FileWhereInputObjectSchema: z.ZodType<Prisma.FileWhereInput> = filewhereinputSchema as unknown as z.ZodType<Prisma.FileWhereInput>;
export const FileWhereInputObjectZodSchema = filewhereinputSchema;
