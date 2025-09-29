import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { EnumJOBTYPEFilterObjectSchema as EnumJOBTYPEFilterObjectSchema } from './EnumJOBTYPEFilter.schema';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { EnumRoleNullableFilterObjectSchema as EnumRoleNullableFilterObjectSchema } from './EnumRoleNullableFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const doctorscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorScalarWhereInputObjectSchema), z.lazy(() => DoctorScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorScalarWhereInputObjectSchema), z.lazy(() => DoctorScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  specialization: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  licenseNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  department: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  img: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  colorCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  availabilityStatus: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isActive: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumJOBTYPEFilterObjectSchema), JOBTYPESchema]).optional(),
  role: z.union([z.lazy(() => EnumRoleNullableFilterObjectSchema), RoleSchema]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DoctorScalarWhereInputObjectSchema: z.ZodType<Prisma.DoctorScalarWhereInput> = doctorscalarwhereinputSchema as unknown as z.ZodType<Prisma.DoctorScalarWhereInput>;
export const DoctorScalarWhereInputObjectZodSchema = doctorscalarwhereinputSchema;
