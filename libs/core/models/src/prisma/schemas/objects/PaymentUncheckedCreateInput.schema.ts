import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { PatientBillsUncheckedCreateNestedManyWithoutPaymentInputObjectSchema as PatientBillsUncheckedCreateNestedManyWithoutPaymentInputObjectSchema } from './PatientBillsUncheckedCreateNestedManyWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  billId: z.number().int().optional().nullable(),
  patientId: z.string(),
  appointmentId: z.number().int(),
  billDate: z.coerce.date(),
  paymentDate: z.coerce.date(),
  discount: z.number(),
  totalAmount: z.number(),
  amountPaid: z.number(),
  paymentMethod: PaymentMethodSchema.optional(),
  status: PaymentStatusSchema.optional(),
  receiptNumber: z.number().int(),
  createdAt: z.coerce.date().optional(),
  bills: z.lazy(() => PatientBillsUncheckedCreateNestedManyWithoutPaymentInputObjectSchema)
}).strict();
export const PaymentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PaymentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUncheckedCreateInput>;
export const PaymentUncheckedCreateInputObjectZodSchema = makeSchema();
