import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumPaymentMethodFilterObjectSchema as EnumPaymentMethodFilterObjectSchema } from './EnumPaymentMethodFilter.schema';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { EnumPaymentStatusFilterObjectSchema as EnumPaymentStatusFilterObjectSchema } from './EnumPaymentStatusFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { AppointmentScalarRelationFilterObjectSchema as AppointmentScalarRelationFilterObjectSchema } from './AppointmentScalarRelationFilter.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema';
import { PatientScalarRelationFilterObjectSchema as PatientScalarRelationFilterObjectSchema } from './PatientScalarRelationFilter.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientBillsListRelationFilterObjectSchema as PatientBillsListRelationFilterObjectSchema } from './PatientBillsListRelationFilter.schema'

const paymentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PaymentWhereInputObjectSchema), z.lazy(() => PaymentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PaymentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PaymentWhereInputObjectSchema), z.lazy(() => PaymentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  billId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  appointmentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  billDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  paymentDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  discount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  totalAmount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  amountPaid: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  paymentMethod: z.union([z.lazy(() => EnumPaymentMethodFilterObjectSchema), PaymentMethodSchema]).optional(),
  status: z.union([z.lazy(() => EnumPaymentStatusFilterObjectSchema), PaymentStatusSchema]).optional(),
  receiptNumber: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  appointment: z.union([z.lazy(() => AppointmentScalarRelationFilterObjectSchema), z.lazy(() => AppointmentWhereInputObjectSchema)]).optional(),
  patient: z.union([z.lazy(() => PatientScalarRelationFilterObjectSchema), z.lazy(() => PatientWhereInputObjectSchema)]).optional(),
  bills: z.lazy(() => PatientBillsListRelationFilterObjectSchema).optional()
}).strict();
export const PaymentWhereInputObjectSchema: z.ZodType<Prisma.PaymentWhereInput> = paymentwhereinputSchema as unknown as z.ZodType<Prisma.PaymentWhereInput>;
export const PaymentWhereInputObjectZodSchema = paymentwhereinputSchema;
