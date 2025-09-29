import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema as NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { StaffUncheckedCreateNestedManyWithoutUserInputObjectSchema as StaffUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './StaffUncheckedCreateNestedManyWithoutUserInput.schema';
import { DoctorUncheckedCreateNestedManyWithoutUserInputObjectSchema as DoctorUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './DoctorUncheckedCreateNestedManyWithoutUserInput.schema';
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
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  Notification: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  Staff: z.lazy(() => StaffUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  Doctor: z.lazy(() => DoctorUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  Patient: z.lazy(() => PatientUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  uploads: z.lazy(() => FileUncheckedCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
