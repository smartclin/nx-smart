import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumAppointmentStatusNullableFilterObjectSchema as EnumAppointmentStatusNullableFilterObjectSchema } from './EnumAppointmentStatusNullableFilter.schema';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const appointmentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AppointmentScalarWhereInputObjectSchema), z.lazy(() => AppointmentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AppointmentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AppointmentScalarWhereInputObjectSchema), z.lazy(() => AppointmentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  serviceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  appointmentDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  time: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumAppointmentStatusNullableFilterObjectSchema), AppointmentStatusSchema]).optional().nullable(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  note: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  reason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AppointmentScalarWhereInputObjectSchema: z.ZodType<Prisma.AppointmentScalarWhereInput> = appointmentscalarwhereinputSchema as unknown as z.ZodType<Prisma.AppointmentScalarWhereInput>;
export const AppointmentScalarWhereInputObjectZodSchema = appointmentscalarwhereinputSchema;
