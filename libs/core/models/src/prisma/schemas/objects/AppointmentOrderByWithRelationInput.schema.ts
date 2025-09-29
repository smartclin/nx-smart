import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PatientOrderByWithRelationInputObjectSchema as PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema as DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema';
import { ServicesOrderByWithRelationInputObjectSchema as ServicesOrderByWithRelationInputObjectSchema } from './ServicesOrderByWithRelationInput.schema';
import { PaymentOrderByRelationAggregateInputObjectSchema as PaymentOrderByRelationAggregateInputObjectSchema } from './PaymentOrderByRelationAggregateInput.schema';
import { MedicalRecordsOrderByRelationAggregateInputObjectSchema as MedicalRecordsOrderByRelationAggregateInputObjectSchema } from './MedicalRecordsOrderByRelationAggregateInput.schema';
import { ReminderOrderByRelationAggregateInputObjectSchema as ReminderOrderByRelationAggregateInputObjectSchema } from './ReminderOrderByRelationAggregateInput.schema';
import { BillingOrderByRelationAggregateInputObjectSchema as BillingOrderByRelationAggregateInputObjectSchema } from './BillingOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  serviceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  appointmentDate: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  note: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  patient: z.lazy(() => PatientOrderByWithRelationInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
  service: z.lazy(() => ServicesOrderByWithRelationInputObjectSchema).optional(),
  bills: z.lazy(() => PaymentOrderByRelationAggregateInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsOrderByRelationAggregateInputObjectSchema).optional(),
  reminders: z.lazy(() => ReminderOrderByRelationAggregateInputObjectSchema).optional(),
  Billing: z.lazy(() => BillingOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AppointmentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AppointmentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentOrderByWithRelationInput>;
export const AppointmentOrderByWithRelationInputObjectZodSchema = makeSchema();
