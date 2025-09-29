import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { PaymentUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema as PaymentUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema } from './PaymentUncheckedCreateNestedManyWithoutAppointmentInput.schema';
import { MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema as MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema } from './MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInput.schema';
import { ReminderUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema as ReminderUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema } from './ReminderUncheckedCreateNestedManyWithoutAppointmentInput.schema';
import { BillingUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema as BillingUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema } from './BillingUncheckedCreateNestedManyWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  patientId: z.string(),
  doctorId: z.string(),
  serviceId: z.number().int().optional().nullable(),
  appointmentDate: z.coerce.date(),
  time: z.string(),
  status: AppointmentStatusSchema.optional().nullable(),
  type: z.string(),
  note: z.string().optional().nullable(),
  reason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  bills: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema),
  medical: z.lazy(() => MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema),
  reminders: z.lazy(() => ReminderUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema),
  Billing: z.lazy(() => BillingUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema)
}).strict();
export const AppointmentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AppointmentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUncheckedCreateInput>;
export const AppointmentUncheckedCreateInputObjectZodSchema = makeSchema();
