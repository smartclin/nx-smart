import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema as NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema';
import { StaffCreateNestedManyWithoutUserInputObjectSchema as StaffCreateNestedManyWithoutUserInputObjectSchema } from './StaffCreateNestedManyWithoutUserInput.schema';
import { DoctorCreateNestedManyWithoutUserInputObjectSchema as DoctorCreateNestedManyWithoutUserInputObjectSchema } from './DoctorCreateNestedManyWithoutUserInput.schema';
import { PatientCreateNestedManyWithoutUserInputObjectSchema as PatientCreateNestedManyWithoutUserInputObjectSchema } from './PatientCreateNestedManyWithoutUserInput.schema';
import { TwoFactorCreateNestedManyWithoutUserInputObjectSchema as TwoFactorCreateNestedManyWithoutUserInputObjectSchema } from './TwoFactorCreateNestedManyWithoutUserInput.schema';
import { FileCreateNestedOneWithoutUsersInputObjectSchema as FileCreateNestedOneWithoutUsersInputObjectSchema } from './FileCreateNestedOneWithoutUsersInput.schema';
import { FileCreateNestedManyWithoutUserInputObjectSchema as FileCreateNestedManyWithoutUserInputObjectSchema } from './FileCreateNestedManyWithoutUserInput.schema'

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
  createdAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema),
  Notification: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema),
  Staff: z.lazy(() => StaffCreateNestedManyWithoutUserInputObjectSchema),
  Doctor: z.lazy(() => DoctorCreateNestedManyWithoutUserInputObjectSchema),
  Patient: z.lazy(() => PatientCreateNestedManyWithoutUserInputObjectSchema),
  twofactors: z.lazy(() => TwoFactorCreateNestedManyWithoutUserInputObjectSchema),
  avatar: z.lazy(() => FileCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  uploads: z.lazy(() => FileCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
