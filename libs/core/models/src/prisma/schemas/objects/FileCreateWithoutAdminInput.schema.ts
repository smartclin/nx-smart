import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileTypeSchema } from '../enums/FileType.schema';
import { UserCreateNestedOneWithoutUploadsInputObjectSchema as UserCreateNestedOneWithoutUploadsInputObjectSchema } from './UserCreateNestedOneWithoutUploadsInput.schema';
import { AdminCreateNestedManyWithoutAvatarInputObjectSchema as AdminCreateNestedManyWithoutAvatarInputObjectSchema } from './AdminCreateNestedManyWithoutAvatarInput.schema';
import { UserCreateNestedManyWithoutAvatarInputObjectSchema as UserCreateNestedManyWithoutAvatarInputObjectSchema } from './UserCreateNestedManyWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  size: z.number().int(),
  type: FileTypeSchema,
  isPublic: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUploadsInputObjectSchema).optional(),
  admins: z.lazy(() => AdminCreateNestedManyWithoutAvatarInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutAvatarInputObjectSchema).optional()
}).strict();
export const FileCreateWithoutAdminInputObjectSchema: z.ZodType<Prisma.FileCreateWithoutAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateWithoutAdminInput>;
export const FileCreateWithoutAdminInputObjectZodSchema = makeSchema();
