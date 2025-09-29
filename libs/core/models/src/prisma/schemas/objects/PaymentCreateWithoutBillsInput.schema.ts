import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { AppointmentCreateNestedOneWithoutBillsInputObjectSchema as AppointmentCreateNestedOneWithoutBillsInputObjectSchema } from './AppointmentCreateNestedOneWithoutBillsInput.schema';
import { PatientCreateNestedOneWithoutPaymentsInputObjectSchema as PatientCreateNestedOneWithoutPaymentsInputObjectSchema } from './PatientCreateNestedOneWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  billId: z.number().int().optional().nullable(),
  billDate: z.coerce.date(),
  paymentDate: z.coerce.date(),
  discount: z.number(),
  totalAmount: z.number(),
  amountPaid: z.number(),
  paymentMethod: PaymentMethodSchema.optional(),
  status: PaymentStatusSchema.optional(),
  receiptNumber: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  appointment: z.lazy(() => AppointmentCreateNestedOneWithoutBillsInputObjectSchema),
  patient: z.lazy(() => PatientCreateNestedOneWithoutPaymentsInputObjectSchema)
}).strict();
export const PaymentCreateWithoutBillsInputObjectSchema: z.ZodType<Prisma.PaymentCreateWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateWithoutBillsInput>;
export const PaymentCreateWithoutBillsInputObjectZodSchema = makeSchema();
