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
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ImmunizationListRelationFilterObjectSchema as ImmunizationListRelationFilterObjectSchema } from './ImmunizationListRelationFilter.schema';
import { GrowthChartListRelationFilterObjectSchema as GrowthChartListRelationFilterObjectSchema } from './GrowthChartListRelationFilter.schema'

const staffwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StaffWhereInputObjectSchema), z.lazy(() => StaffWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StaffWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StaffWhereInputObjectSchema), z.lazy(() => StaffWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  immunizations: z.lazy(() => ImmunizationListRelationFilterObjectSchema).optional(),
  GrowthChart: z.lazy(() => GrowthChartListRelationFilterObjectSchema).optional()
}).strict();
export const StaffWhereInputObjectSchema: z.ZodType<Prisma.StaffWhereInput> = staffwhereinputSchema as unknown as z.ZodType<Prisma.StaffWhereInput>;
export const StaffWhereInputObjectZodSchema = staffwhereinputSchema;
