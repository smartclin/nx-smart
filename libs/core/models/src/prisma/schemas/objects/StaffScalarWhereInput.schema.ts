import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { EnumRoleFilterObjectSchema as EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumStatusFilterObjectSchema as EnumStatusFilterObjectSchema } from './EnumStatusFilter.schema';
import { StatusSchema } from '../enums/Status.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const staffscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StaffScalarWhereInputObjectSchema), z.lazy(() => StaffScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StaffScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StaffScalarWhereInputObjectSchema), z.lazy(() => StaffScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  address: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  department: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  img: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  licenseNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  colorCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  hireDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  salary: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), RoleSchema]).optional(),
  status: z.union([z.lazy(() => EnumStatusFilterObjectSchema), StatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StaffScalarWhereInputObjectSchema: z.ZodType<Prisma.StaffScalarWhereInput> = staffscalarwhereinputSchema as unknown as z.ZodType<Prisma.StaffScalarWhereInput>;
export const StaffScalarWhereInputObjectZodSchema = staffscalarwhereinputSchema;
