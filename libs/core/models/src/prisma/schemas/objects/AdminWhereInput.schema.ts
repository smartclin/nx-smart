import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumRoleNullableFilterObjectSchema as EnumRoleNullableFilterObjectSchema } from './EnumRoleNullableFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FileNullableScalarRelationFilterObjectSchema as FileNullableScalarRelationFilterObjectSchema } from './FileNullableScalarRelationFilter.schema';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './FileWhereInput.schema';
import { FileListRelationFilterObjectSchema as FileListRelationFilterObjectSchema } from './FileListRelationFilter.schema'

const adminwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AdminWhereInputObjectSchema), z.lazy(() => AdminWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AdminWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AdminWhereInputObjectSchema), z.lazy(() => AdminWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumRoleNullableFilterObjectSchema), RoleSchema]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  birthDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  avatarId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isRoot: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  avatar: z.union([z.lazy(() => FileNullableScalarRelationFilterObjectSchema), z.lazy(() => FileWhereInputObjectSchema)]).optional(),
  uploads: z.lazy(() => FileListRelationFilterObjectSchema).optional()
}).strict();
export const AdminWhereInputObjectSchema: z.ZodType<Prisma.AdminWhereInput> = adminwhereinputSchema as unknown as z.ZodType<Prisma.AdminWhereInput>;
export const AdminWhereInputObjectZodSchema = adminwhereinputSchema;
