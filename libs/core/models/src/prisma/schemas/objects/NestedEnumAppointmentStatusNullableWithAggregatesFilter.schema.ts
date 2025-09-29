import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumAppointmentStatusNullableFilterObjectSchema as NestedEnumAppointmentStatusNullableFilterObjectSchema } from './NestedEnumAppointmentStatusNullableFilter.schema'

const nestedenumappointmentstatusnullablewithaggregatesfilterSchema = z.object({
  equals: AppointmentStatusSchema.optional().nullable(),
  in: AppointmentStatusSchema.array().optional().nullable(),
  notIn: AppointmentStatusSchema.array().optional().nullable(),
  not: z.union([AppointmentStatusSchema, z.lazy(() => NestedEnumAppointmentStatusNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAppointmentStatusNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAppointmentStatusNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumAppointmentStatusNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumAppointmentStatusNullableWithAggregatesFilter> = nestedenumappointmentstatusnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAppointmentStatusNullableWithAggregatesFilter>;
export const NestedEnumAppointmentStatusNullableWithAggregatesFilterObjectZodSchema = nestedenumappointmentstatusnullablewithaggregatesfilterSchema;
