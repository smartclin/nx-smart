import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema';
import { DoctorArgsObjectSchema as DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { ServicesArgsObjectSchema as ServicesArgsObjectSchema } from './ServicesArgs.schema';
import { PaymentFindManySchema as PaymentFindManySchema } from '../findManyPayment.schema';
import { MedicalRecordsFindManySchema as MedicalRecordsFindManySchema } from '../findManyMedicalRecords.schema';
import { ReminderFindManySchema as ReminderFindManySchema } from '../findManyReminder.schema';
import { BillingFindManySchema as BillingFindManySchema } from '../findManyBilling.schema';
import { AppointmentCountOutputTypeArgsObjectSchema as AppointmentCountOutputTypeArgsObjectSchema } from './AppointmentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  patientId: z.boolean().optional(),
  doctorId: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  appointmentDate: z.boolean().optional(),
  time: z.boolean().optional(),
  status: z.boolean().optional(),
  type: z.boolean().optional(),
  note: z.boolean().optional(),
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  service: z.union([z.boolean(), z.lazy(() => ServicesArgsObjectSchema)]).optional(),
  bills: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
  medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsFindManySchema)]).optional(),
  reminders: z.union([z.boolean(), z.lazy(() => ReminderFindManySchema)]).optional(),
  reason: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Billing: z.union([z.boolean(), z.lazy(() => BillingFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AppointmentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AppointmentSelectObjectSchema: z.ZodType<Prisma.AppointmentSelect> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentSelect>;
export const AppointmentSelectObjectZodSchema = makeSchema();
