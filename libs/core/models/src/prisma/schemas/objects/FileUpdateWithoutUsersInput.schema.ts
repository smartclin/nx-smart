import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FileTypeSchema } from '../enums/FileType.schema';
import { EnumFileTypeFieldUpdateOperationsInputObjectSchema as EnumFileTypeFieldUpdateOperationsInputObjectSchema } from './EnumFileTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutUploadsNestedInputObjectSchema as UserUpdateOneWithoutUploadsNestedInputObjectSchema } from './UserUpdateOneWithoutUploadsNestedInput.schema';
import { AdminUpdateOneWithoutUploadsNestedInputObjectSchema as AdminUpdateOneWithoutUploadsNestedInputObjectSchema } from './AdminUpdateOneWithoutUploadsNestedInput.schema';
import { AdminUpdateManyWithoutAvatarNestedInputObjectSchema as AdminUpdateManyWithoutAvatarNestedInputObjectSchema } from './AdminUpdateManyWithoutAvatarNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([FileTypeSchema, z.lazy(() => EnumFileTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutUploadsNestedInputObjectSchema).optional(),
  admin: z.lazy(() => AdminUpdateOneWithoutUploadsNestedInputObjectSchema).optional(),
  admins: z.lazy(() => AdminUpdateManyWithoutAvatarNestedInputObjectSchema).optional()
}).strict();
export const FileUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.FileUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithoutUsersInput>;
export const FileUpdateWithoutUsersInputObjectZodSchema = makeSchema();
