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
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  Notification: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  Staff: z.union([z.boolean(), z.lazy(() => StaffFindManySchema)]).optional(),
  Doctor: z.union([z.boolean(), z.lazy(() => DoctorFindManySchema)]).optional(),
  Patient: z.union([z.boolean(), z.lazy(() => PatientFindManySchema)]).optional(),
  twofactors: z.union([z.boolean(), z.lazy(() => TwoFactorFindManySchema)]).optional(),
  avatar: z.union([z.boolean(), z.lazy(() => FileArgsObjectSchema)]).optional(),
  uploads: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
