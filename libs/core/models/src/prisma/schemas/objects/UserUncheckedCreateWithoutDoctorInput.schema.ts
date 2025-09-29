import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema as NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { StaffUncheckedCreateNestedManyWithoutUserInputObjectSchema as StaffUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './StaffUncheckedCreateNestedManyWithoutUserInput.schema';
import { PatientUncheckedCreateNestedManyWithoutUserInputObjectSchema as PatientUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PatientUncheckedCreateNestedManyWithoutUserInput.schema';
import { TwoFactorUncheckedCreateNestedManyWithoutUserInputObjectSchema as TwoFactorUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TwoFactorUncheckedCreateNestedManyWithoutUserInput.schema';
import { FileUncheckedCreateNestedManyWithoutUserInputObjectSchema as FileUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  username: z.string(),
  password: z.string(),
  phone: z.string(),
  birthDate: z.coerce.date().optional().nullable(),
  gender: GenderSchema.optional().nullable(),
  displayUsername: z.string().optional().nullable(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  avatarId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Staff: z.lazy(() => StaffUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Patient: z.lazy(() => PatientUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  uploads: z.lazy(() => FileUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutDoctorInput>;
export const UserUncheckedCreateWithoutDoctorInputObjectZodSchema = makeSchema();
