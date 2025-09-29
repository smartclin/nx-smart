import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { NullableEnumGenderFieldUpdateOperationsInputObjectSchema as NullableEnumGenderFieldUpdateOperationsInputObjectSchema } from './NullableEnumGenderFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema as SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema as AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { StaffUpdateManyWithoutUserNestedInputObjectSchema as StaffUpdateManyWithoutUserNestedInputObjectSchema } from './StaffUpdateManyWithoutUserNestedInput.schema';
import { DoctorUpdateManyWithoutUserNestedInputObjectSchema as DoctorUpdateManyWithoutUserNestedInputObjectSchema } from './DoctorUpdateManyWithoutUserNestedInput.schema';
import { PatientUpdateManyWithoutUserNestedInputObjectSchema as PatientUpdateManyWithoutUserNestedInputObjectSchema } from './PatientUpdateManyWithoutUserNestedInput.schema';
import { TwoFactorUpdateManyWithoutUserNestedInputObjectSchema as TwoFactorUpdateManyWithoutUserNestedInputObjectSchema } from './TwoFactorUpdateManyWithoutUserNestedInput.schema';
import { FileUpdateOneWithoutUsersNestedInputObjectSchema as FileUpdateOneWithoutUsersNestedInputObjectSchema } from './FileUpdateOneWithoutUsersNestedInput.schema';
import { FileUpdateManyWithoutUserNestedInputObjectSchema as FileUpdateManyWithoutUserNestedInputObjectSchema } from './FileUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  birthDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  gender: z.union([GenderSchema, z.lazy(() => NullableEnumGenderFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  displayUsername: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  twoFactorEnabled: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  role: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  banned: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  banReason: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  banExpires: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Staff: z.lazy(() => StaffUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Doctor: z.lazy(() => DoctorUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Patient: z.lazy(() => PatientUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  avatar: z.lazy(() => FileUpdateOneWithoutUsersNestedInputObjectSchema).optional(),
  uploads: z.lazy(() => FileUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutNotificationInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutNotificationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutNotificationInput>;
export const UserUpdateWithoutNotificationInputObjectZodSchema = makeSchema();
