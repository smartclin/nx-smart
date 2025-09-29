import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { PatientCreateNestedOneWithoutAppointmentsInputObjectSchema as PatientCreateNestedOneWithoutAppointmentsInputObjectSchema } from './PatientCreateNestedOneWithoutAppointmentsInput.schema';
import { DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema as DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema } from './DoctorCreateNestedOneWithoutAppointmentsInput.schema';
import { ServicesCreateNestedOneWithoutAppointmentsInputObjectSchema as ServicesCreateNestedOneWithoutAppointmentsInputObjectSchema } from './ServicesCreateNestedOneWithoutAppointmentsInput.schema';
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
  patient: z.lazy(() => PatientCreateNestedOneWithoutAppointmentsInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema),
  service: z.lazy(() => ServicesCreateNestedOneWithoutAppointmentsInputObjectSchema).optional(),
  bills: z.lazy(() => PaymentCreateNestedManyWithoutAppointmentInputObjectSchema),
  medical: z.lazy(() => MedicalRecordsCreateNestedManyWithoutAppointmentInputObjectSchema),
  reminders: z.lazy(() => ReminderCreateNestedManyWithoutAppointmentInputObjectSchema),
  Billing: z.lazy(() => BillingCreateNestedManyWithoutAppointmentInputObjectSchema)
}).strict();
export const AppointmentCreateInputObjectSchema: z.ZodType<Prisma.AppointmentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateInput>;
export const AppointmentCreateInputObjectZodSchema = makeSchema();
