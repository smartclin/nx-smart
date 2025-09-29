import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'

const nestedenumappointmentstatusnullablefilterSchema = z.object({
  equals: AppointmentStatusSchema.optional().nullable(),
  in: AppointmentStatusSchema.array().optional().nullable(),
  notIn: AppointmentStatusSchema.array().optional().nullable(),
  not: z.union([AppointmentStatusSchema, z.lazy(() => NestedEnumAppointmentStatusNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumAppointmentStatusNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumAppointmentStatusNullableFilter> = nestedenumappointmentstatusnullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumAppointmentStatusNullableFilter>;
export const NestedEnumAppointmentStatusNullableFilterObjectZodSchema = nestedenumappointmentstatusnullablefilterSchema;
