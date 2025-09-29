import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { NullableEnumAppointmentStatusFieldUpdateOperationsInputObjectSchema as NullableEnumAppointmentStatusFieldUpdateOperationsInputObjectSchema } from './NullableEnumAppointmentStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PaymentUncheckedUpdateManyWithoutAppointmentNestedInputObjectSchema as PaymentUncheckedUpdateManyWithoutAppointmentNestedInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutAppointmentNestedInput.schema';
import { MedicalRecordsUncheckedUpdateManyWithoutAppointmentNestedInputObjectSchema as MedicalRecordsUncheckedUpdateManyWithoutAppointmentNestedInputObjectSchema } from './MedicalRecordsUncheckedUpdateManyWithoutAppointmentNestedInput.schema';
import { ReminderUncheckedUpdateManyWithoutAppointmentNestedInputObjectSchema as ReminderUncheckedUpdateManyWithoutAppointmentNestedInputObjectSchema } from './ReminderUncheckedUpdateManyWithoutAppointmentNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  patientId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  doctorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  serviceId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  appointmentDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  time: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([AppointmentStatusSchema, z.lazy(() => NullableEnumAppointmentStatusFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  note: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  reason: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bills: z.lazy(() => PaymentUncheckedUpdateManyWithoutAppointmentNestedInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsUncheckedUpdateManyWithoutAppointmentNestedInputObjectSchema).optional(),
  reminders: z.lazy(() => ReminderUncheckedUpdateManyWithoutAppointmentNestedInputObjectSchema).optional()
}).strict();
export const AppointmentUncheckedUpdateWithoutBillingInputObjectSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutBillingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutBillingInput>;
export const AppointmentUncheckedUpdateWithoutBillingInputObjectZodSchema = makeSchema();
