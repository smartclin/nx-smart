import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { NotificationFindManySchema as NotificationFindManySchema } from '../findManyNotification.schema';
import { StaffFindManySchema as StaffFindManySchema } from '../findManyStaff.schema';
import { DoctorFindManySchema as DoctorFindManySchema } from '../findManyDoctor.schema';
import { PatientFindManySchema as PatientFindManySchema } from '../findManyPatient.schema';
import { TwoFactorFindManySchema as TwoFactorFindManySchema } from '../findManyTwoFactor.schema';
import { FileArgsObjectSchema as FileArgsObjectSchema } from './FileArgs.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  phone: z.boolean().optional(),
  birthDate: z.boolean().optional(),
  gender: z.boolean().optional(),
  displayUsername: z.boolean().optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  Notification: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  Staff: z.union([z.boolean(), z.lazy(() => StaffFindManySchema)]).optional(),
  Doctor: z.union([z.boolean(), z.lazy(() => DoctorFindManySchema)]).optional(),
  Patient: z.union([z.boolean(), z.lazy(() => PatientFindManySchema)]).optional(),
  twoFactorEnabled: z.boolean().optional(),
  role: z.boolean().optional(),
  banned: z.boolean().optional(),
  banReason: z.boolean().optional(),
  banExpires: z.boolean().optional(),
  twofactors: z.union([z.boolean(), z.lazy(() => TwoFactorFindManySchema)]).optional(),
  avatarId: z.boolean().optional(),
  avatar: z.union([z.boolean(), z.lazy(() => FileArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  uploads: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
