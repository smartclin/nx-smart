import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentArgsObjectSchema as AppointmentArgsObjectSchema } from './AppointmentArgs.schema';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema';
import { PatientBillsFindManySchema as PatientBillsFindManySchema } from '../findManyPatientBills.schema';
import { PaymentCountOutputTypeArgsObjectSchema as PaymentCountOutputTypeArgsObjectSchema } from './PaymentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  billId: z.boolean().optional(),
  patientId: z.boolean().optional(),
  appointmentId: z.boolean().optional(),
  billDate: z.boolean().optional(),
  paymentDate: z.boolean().optional(),
  discount: z.boolean().optional(),
  totalAmount: z.boolean().optional(),
  amountPaid: z.boolean().optional(),
  paymentMethod: z.boolean().optional(),
  status: z.boolean().optional(),
  receiptNumber: z.boolean().optional(),
  appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsObjectSchema)]).optional(),
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  bills: z.union([z.boolean(), z.lazy(() => PatientBillsFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => PaymentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PaymentSelectObjectSchema: z.ZodType<Prisma.PaymentSelect> = makeSchema() as unknown as z.ZodType<Prisma.PaymentSelect>;
export const PaymentSelectObjectZodSchema = makeSchema();
