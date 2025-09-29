import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumGenderNullableFilterObjectSchema as EnumGenderNullableFilterObjectSchema } from './EnumGenderNullableFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SessionListRelationFilterObjectSchema as SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { AccountListRelationFilterObjectSchema as AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { NotificationListRelationFilterObjectSchema as NotificationListRelationFilterObjectSchema } from './NotificationListRelationFilter.schema';
import { StaffListRelationFilterObjectSchema as StaffListRelationFilterObjectSchema } from './StaffListRelationFilter.schema';
import { DoctorListRelationFilterObjectSchema as DoctorListRelationFilterObjectSchema } from './DoctorListRelationFilter.schema';
import { PatientListRelationFilterObjectSchema as PatientListRelationFilterObjectSchema } from './PatientListRelationFilter.schema';
import { TwoFactorListRelationFilterObjectSchema as TwoFactorListRelationFilterObjectSchema } from './TwoFactorListRelationFilter.schema';
import { FileNullableScalarRelationFilterObjectSchema as FileNullableScalarRelationFilterObjectSchema } from './FileNullableScalarRelationFilter.schema';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './FileWhereInput.schema';
import { FileListRelationFilterObjectSchema as FileListRelationFilterObjectSchema } from './FileListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  birthDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  gender: z.union([z.lazy(() => EnumGenderNullableFilterObjectSchema), GenderSchema]).optional().nullable(),
  displayUsername: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  twoFactorEnabled: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  role: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  banned: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  banReason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  banExpires: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  avatarId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  Notification: z.lazy(() => NotificationListRelationFilterObjectSchema).optional(),
  Staff: z.lazy(() => StaffListRelationFilterObjectSchema).optional(),
  Doctor: z.lazy(() => DoctorListRelationFilterObjectSchema).optional(),
  Patient: z.lazy(() => PatientListRelationFilterObjectSchema).optional(),
  twofactors: z.lazy(() => TwoFactorListRelationFilterObjectSchema).optional(),
  avatar: z.union([z.lazy(() => FileNullableScalarRelationFilterObjectSchema), z.lazy(() => FileWhereInputObjectSchema)]).optional(),
  uploads: z.lazy(() => FileListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
