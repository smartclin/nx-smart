import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumAppointmentStatusNullableFilterObjectSchema as EnumAppointmentStatusNullableFilterObjectSchema } from './EnumAppointmentStatusNullableFilter.schema';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PatientScalarRelationFilterObjectSchema as PatientScalarRelationFilterObjectSchema } from './PatientScalarRelationFilter.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { DoctorScalarRelationFilterObjectSchema as DoctorScalarRelationFilterObjectSchema } from './DoctorScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { ServicesNullableScalarRelationFilterObjectSchema as ServicesNullableScalarRelationFilterObjectSchema } from './ServicesNullableScalarRelationFilter.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema';
import { PaymentListRelationFilterObjectSchema as PaymentListRelationFilterObjectSchema } from './PaymentListRelationFilter.schema';
import { MedicalRecordsListRelationFilterObjectSchema as MedicalRecordsListRelationFilterObjectSchema } from './MedicalRecordsListRelationFilter.schema';
import { ReminderListRelationFilterObjectSchema as ReminderListRelationFilterObjectSchema } from './ReminderListRelationFilter.schema';
import { BillingListRelationFilterObjectSchema as BillingListRelationFilterObjectSchema } from './BillingListRelationFilter.schema'

const appointmentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AppointmentWhereInputObjectSchema), z.lazy(() => AppointmentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AppointmentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AppointmentWhereInputObjectSchema), z.lazy(() => AppointmentWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  patient: z.union([z.lazy(() => PatientScalarRelationFilterObjectSchema), z.lazy(() => PatientWhereInputObjectSchema)]).optional(),
  doctor: z.union([z.lazy(() => DoctorScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  service: z.union([z.lazy(() => ServicesNullableScalarRelationFilterObjectSchema), z.lazy(() => ServicesWhereInputObjectSchema)]).optional(),
  bills: z.lazy(() => PaymentListRelationFilterObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsListRelationFilterObjectSchema).optional(),
  reminders: z.lazy(() => ReminderListRelationFilterObjectSchema).optional(),
  Billing: z.lazy(() => BillingListRelationFilterObjectSchema).optional()
}).strict();
export const AppointmentWhereInputObjectSchema: z.ZodType<Prisma.AppointmentWhereInput> = appointmentwhereinputSchema as unknown as z.ZodType<Prisma.AppointmentWhereInput>;
export const AppointmentWhereInputObjectZodSchema = appointmentwhereinputSchema;
