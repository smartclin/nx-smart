import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';
import { NullableEnumAppointmentStatusFieldUpdateOperationsInputObjectSchema as NullableEnumAppointmentStatusFieldUpdateOperationsInputObjectSchema } from './NullableEnumAppointmentStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PatientUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema as PatientUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema } from './PatientUpdateOneRequiredWithoutAppointmentsNestedInput.schema';
import { DoctorUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema as DoctorUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutAppointmentsNestedInput.schema';
import { ServicesUpdateOneWithoutAppointmentsNestedInputObjectSchema as ServicesUpdateOneWithoutAppointmentsNestedInputObjectSchema } from './ServicesUpdateOneWithoutAppointmentsNestedInput.schema';
import { PaymentUpdateManyWithoutAppointmentNestedInputObjectSchema as PaymentUpdateManyWithoutAppointmentNestedInputObjectSchema } from './PaymentUpdateManyWithoutAppointmentNestedInput.schema';
import { ReminderUpdateManyWithoutAppointmentNestedInputObjectSchema as ReminderUpdateManyWithoutAppointmentNestedInputObjectSchema } from './ReminderUpdateManyWithoutAppointmentNestedInput.schema';
import { BillingUpdateManyWithoutAppointmentNestedInputObjectSchema as BillingUpdateManyWithoutAppointmentNestedInputObjectSchema } from './BillingUpdateManyWithoutAppointmentNestedInput.schema'

const makeSchema = () => z.object({
  appointmentDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  time: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([AppointmentStatusSchema, z.lazy(() => NullableEnumAppointmentStatusFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  note: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  reason: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  patient: z.lazy(() => PatientUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema).optional(),
  service: z.lazy(() => ServicesUpdateOneWithoutAppointmentsNestedInputObjectSchema).optional(),
  bills: z.lazy(() => PaymentUpdateManyWithoutAppointmentNestedInputObjectSchema).optional(),
  reminders: z.lazy(() => ReminderUpdateManyWithoutAppointmentNestedInputObjectSchema).optional(),
  Billing: z.lazy(() => BillingUpdateManyWithoutAppointmentNestedInputObjectSchema).optional()
}).strict();
export const AppointmentUpdateWithoutMedicalInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateWithoutMedicalInput>;
export const AppointmentUpdateWithoutMedicalInputObjectZodSchema = makeSchema();
