import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { PaymentUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema as PaymentUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema } from './PaymentUncheckedCreateNestedManyWithoutAppointmentInput.schema';
import { MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema as MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema } from './MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInput.schema';
import { ReminderUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema as ReminderUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema } from './ReminderUncheckedCreateNestedManyWithoutAppointmentInput.schema'

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
  updatedAt: z.coerce.date().optional(),
  bills: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema).optional(),
  reminders: z.lazy(() => ReminderUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema).optional()
}).strict();
export const AppointmentUncheckedCreateWithoutBillingInputObjectSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutBillingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUncheckedCreateWithoutBillingInput>;
export const AppointmentUncheckedCreateWithoutBillingInputObjectZodSchema = makeSchema();
