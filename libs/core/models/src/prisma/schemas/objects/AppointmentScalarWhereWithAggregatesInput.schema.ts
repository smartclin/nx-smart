import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumAppointmentStatusNullableWithAggregatesFilterObjectSchema as EnumAppointmentStatusNullableWithAggregatesFilterObjectSchema } from './EnumAppointmentStatusNullableWithAggregatesFilter.schema';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const appointmentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AppointmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AppointmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AppointmentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AppointmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AppointmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  patientId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  serviceId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  appointmentDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  time: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumAppointmentStatusNullableWithAggregatesFilterObjectSchema), AppointmentStatusSchema]).optional().nullable(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  note: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  reason: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AppointmentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AppointmentScalarWhereWithAggregatesInput> = appointmentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AppointmentScalarWhereWithAggregatesInput>;
export const AppointmentScalarWhereWithAggregatesInputObjectZodSchema = appointmentscalarwherewithaggregatesinputSchema;
