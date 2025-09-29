import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AppointmentOrderByWithRelationInputObjectSchema as AppointmentOrderByWithRelationInputObjectSchema } from './AppointmentOrderByWithRelationInput.schema';
import { PatientOrderByWithRelationInputObjectSchema as PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema';
import { PatientBillsOrderByRelationAggregateInputObjectSchema as PatientBillsOrderByRelationAggregateInputObjectSchema } from './PatientBillsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  patientId: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  billDate: SortOrderSchema.optional(),
  paymentDate: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  amountPaid: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  receiptNumber: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  appointment: z.lazy(() => AppointmentOrderByWithRelationInputObjectSchema).optional(),
  patient: z.lazy(() => PatientOrderByWithRelationInputObjectSchema).optional(),
  bills: z.lazy(() => PatientBillsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const PaymentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentOrderByWithRelationInput>;
export const PaymentOrderByWithRelationInputObjectZodSchema = makeSchema();
