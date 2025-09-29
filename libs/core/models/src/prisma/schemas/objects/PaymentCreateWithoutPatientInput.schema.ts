import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { AppointmentCreateNestedOneWithoutBillsInputObjectSchema as AppointmentCreateNestedOneWithoutBillsInputObjectSchema } from './AppointmentCreateNestedOneWithoutBillsInput.schema';
import { PatientBillsCreateNestedManyWithoutPaymentInputObjectSchema as PatientBillsCreateNestedManyWithoutPaymentInputObjectSchema } from './PatientBillsCreateNestedManyWithoutPaymentInput.schema'

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
  bills: z.lazy(() => PatientBillsCreateNestedManyWithoutPaymentInputObjectSchema).optional()
}).strict();
export const PaymentCreateWithoutPatientInputObjectSchema: z.ZodType<Prisma.PaymentCreateWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateWithoutPatientInput>;
export const PaymentCreateWithoutPatientInputObjectZodSchema = makeSchema();
