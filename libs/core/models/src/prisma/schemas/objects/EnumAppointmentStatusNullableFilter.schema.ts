import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { NestedEnumAppointmentStatusNullableFilterObjectSchema as NestedEnumAppointmentStatusNullableFilterObjectSchema } from './NestedEnumAppointmentStatusNullableFilter.schema'

const makeSchema = () => z.object({
  equals: AppointmentStatusSchema.optional().nullable(),
  in: AppointmentStatusSchema.array().optional().nullable(),
  notIn: AppointmentStatusSchema.array().optional().nullable(),
  not: z.union([AppointmentStatusSchema, z.lazy(() => NestedEnumAppointmentStatusNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumAppointmentStatusNullableFilterObjectSchema: z.ZodType<Prisma.EnumAppointmentStatusNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAppointmentStatusNullableFilter>;
export const EnumAppointmentStatusNullableFilterObjectZodSchema = makeSchema();
