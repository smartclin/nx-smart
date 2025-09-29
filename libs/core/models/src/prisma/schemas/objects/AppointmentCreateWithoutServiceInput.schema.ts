import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { PatientCreateNestedOneWithoutAppointmentsInputObjectSchema as PatientCreateNestedOneWithoutAppointmentsInputObjectSchema } from './PatientCreateNestedOneWithoutAppointmentsInput.schema';
import { DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema as DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema } from './DoctorCreateNestedOneWithoutAppointmentsInput.schema';
import { PaymentCreateNestedManyWithoutAppointmentInputObjectSchema as PaymentCreateNestedManyWithoutAppointmentInputObjectSchema } from './PaymentCreateNestedManyWithoutAppointmentInput.schema';
import { MedicalRecordsCreateNestedManyWithoutAppointmentInputObjectSchema as MedicalRecordsCreateNestedManyWithoutAppointmentInputObjectSchema } from './MedicalRecordsCreateNestedManyWithoutAppointmentInput.schema';
import { ReminderCreateNestedManyWithoutAppointmentInputObjectSchema as ReminderCreateNestedManyWithoutAppointmentInputObjectSchema } from './ReminderCreateNestedManyWithoutAppointmentInput.schema';
import { BillingCreateNestedManyWithoutAppointmentInputObjectSchema as BillingCreateNestedManyWithoutAppointmentInputObjectSchema } from './BillingCreateNestedManyWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  appointmentDate: z.coerce.date(),
  time: z.string(),
  status: AppointmentStatusSchema.optional().nullable(),
  type: z.string(),
  note: z.string().optional().nullable(),
  reason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutAppointmentsInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema),
  bills: z.lazy(() => PaymentCreateNestedManyWithoutAppointmentInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsCreateNestedManyWithoutAppointmentInputObjectSchema).optional(),
  reminders: z.lazy(() => ReminderCreateNestedManyWithoutAppointmentInputObjectSchema).optional(),
  Billing: z.lazy(() => BillingCreateNestedManyWithoutAppointmentInputObjectSchema).optional()
}).strict();
export const AppointmentCreateWithoutServiceInputObjectSchema: z.ZodType<Prisma.AppointmentCreateWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateWithoutServiceInput>;
export const AppointmentCreateWithoutServiceInputObjectZodSchema = makeSchema();
