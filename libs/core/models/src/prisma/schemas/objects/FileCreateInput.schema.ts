import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileTypeSchema } from '../enums/FileType.schema';
import { UserCreateNestedOneWithoutUploadsInputObjectSchema as UserCreateNestedOneWithoutUploadsInputObjectSchema } from './UserCreateNestedOneWithoutUploadsInput.schema';
import { AdminCreateNestedOneWithoutUploadsInputObjectSchema as AdminCreateNestedOneWithoutUploadsInputObjectSchema } from './AdminCreateNestedOneWithoutUploadsInput.schema';
import { AdminCreateNestedManyWithoutAvatarInputObjectSchema as AdminCreateNestedManyWithoutAvatarInputObjectSchema } from './AdminCreateNestedManyWithoutAvatarInput.schema';
import { UserCreateNestedManyWithoutAvatarInputObjectSchema as UserCreateNestedManyWithoutAvatarInputObjectSchema } from './UserCreateNestedManyWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  size: z.number().int(),
  type: FileTypeSchema,
  isPublic: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUploadsInputObjectSchema).optional(),
  admin: z.lazy(() => AdminCreateNestedOneWithoutUploadsInputObjectSchema).optional(),
  admins: z.lazy(() => AdminCreateNestedManyWithoutAvatarInputObjectSchema),
  users: z.lazy(() => UserCreateNestedManyWithoutAvatarInputObjectSchema)
}).strict();
export const FileCreateInputObjectSchema: z.ZodType<Prisma.FileCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateInput>;
export const FileCreateInputObjectZodSchema = makeSchema();
