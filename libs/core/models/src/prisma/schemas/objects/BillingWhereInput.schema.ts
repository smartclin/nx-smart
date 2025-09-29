import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumBillingStatusFilterObjectSchema as EnumBillingStatusFilterObjectSchema } from './EnumBillingStatusFilter.schema';
import { BillingStatusSchema } from '../enums/BillingStatus.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PatientScalarRelationFilterObjectSchema as PatientScalarRelationFilterObjectSchema } from './PatientScalarRelationFilter.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { AppointmentNullableScalarRelationFilterObjectSchema as AppointmentNullableScalarRelationFilterObjectSchema } from './AppointmentNullableScalarRelationFilter.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema'

const billingwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BillingWhereInputObjectSchema), z.lazy(() => BillingWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BillingWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BillingWhereInputObjectSchema), z.lazy(() => BillingWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  appointmentId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  amount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  status: z.union([z.lazy(() => EnumBillingStatusFilterObjectSchema), BillingStatusSchema]).optional(),
  insurance: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  insuranceId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  serviceDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  dueDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  paidDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  patient: z.union([z.lazy(() => PatientScalarRelationFilterObjectSchema), z.lazy(() => PatientWhereInputObjectSchema)]).optional(),
  appointment: z.union([z.lazy(() => AppointmentNullableScalarRelationFilterObjectSchema), z.lazy(() => AppointmentWhereInputObjectSchema)]).optional()
}).strict();
export const BillingWhereInputObjectSchema: z.ZodType<Prisma.BillingWhereInput> = billingwhereinputSchema as unknown as z.ZodType<Prisma.BillingWhereInput>;
export const BillingWhereInputObjectZodSchema = billingwhereinputSchema;
