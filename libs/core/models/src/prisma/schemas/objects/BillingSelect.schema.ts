import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema';
import { AppointmentArgsObjectSchema as AppointmentArgsObjectSchema } from './AppointmentArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  patientId: z.boolean().optional(),
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  appointmentId: z.boolean().optional(),
  appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsObjectSchema)]).optional(),
  amount: z.boolean().optional(),
  status: z.boolean().optional(),
  insurance: z.boolean().optional(),
  insuranceId: z.boolean().optional(),
  serviceDate: z.boolean().optional(),
  dueDate: z.boolean().optional(),
  paidDate: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const BillingSelectObjectSchema: z.ZodType<Prisma.BillingSelect> = makeSchema() as unknown as z.ZodType<Prisma.BillingSelect>;
export const BillingSelectObjectZodSchema = makeSchema();
