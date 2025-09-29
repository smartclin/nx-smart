import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileTypeSchema } from '../enums/FileType.schema';
import { AdminUncheckedCreateNestedManyWithoutAvatarInputObjectSchema as AdminUncheckedCreateNestedManyWithoutAvatarInputObjectSchema } from './AdminUncheckedCreateNestedManyWithoutAvatarInput.schema';
import { UserUncheckedCreateNestedManyWithoutAvatarInputObjectSchema as UserUncheckedCreateNestedManyWithoutAvatarInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  size: z.number().int(),
  type: FileTypeSchema,
  isPublic: z.boolean().optional(),
  userId: z.string().optional().nullable(),
  adminId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  admins: z.lazy(() => AdminUncheckedCreateNestedManyWithoutAvatarInputObjectSchema),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutAvatarInputObjectSchema)
}).strict();
export const FileUncheckedCreateInputObjectSchema: z.ZodType<Prisma.FileUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedCreateInput>;
export const FileUncheckedCreateInputObjectZodSchema = makeSchema();
