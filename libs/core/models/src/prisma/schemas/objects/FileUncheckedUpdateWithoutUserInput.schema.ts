import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FileTypeSchema } from '../enums/FileType.schema';
import { EnumFileTypeFieldUpdateOperationsInputObjectSchema as EnumFileTypeFieldUpdateOperationsInputObjectSchema } from './EnumFileTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AdminUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema as AdminUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema } from './AdminUncheckedUpdateManyWithoutAvatarNestedInput.schema';
import { UserUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema as UserUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutAvatarNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([FileTypeSchema, z.lazy(() => EnumFileTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  adminId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  admins: z.lazy(() => AdminUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema).optional()
}).strict();
export const FileUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.FileUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedUpdateWithoutUserInput>;
export const FileUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
