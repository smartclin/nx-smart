import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { ServicesScalarRelationFilterObjectSchema as ServicesScalarRelationFilterObjectSchema } from './ServicesScalarRelationFilter.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema';
import { PaymentScalarRelationFilterObjectSchema as PaymentScalarRelationFilterObjectSchema } from './PaymentScalarRelationFilter.schema';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './PaymentWhereInput.schema'

const patientbillswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PatientBillsWhereInputObjectSchema), z.lazy(() => PatientBillsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PatientBillsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PatientBillsWhereInputObjectSchema), z.lazy(() => PatientBillsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  billId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  serviceId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  serviceDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  unitCost: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  totalCost: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  service: z.union([z.lazy(() => ServicesScalarRelationFilterObjectSchema), z.lazy(() => ServicesWhereInputObjectSchema)]).optional(),
  payment: z.union([z.lazy(() => PaymentScalarRelationFilterObjectSchema), z.lazy(() => PaymentWhereInputObjectSchema)]).optional()
}).strict();
export const PatientBillsWhereInputObjectSchema: z.ZodType<Prisma.PatientBillsWhereInput> = patientbillswhereinputSchema as unknown as z.ZodType<Prisma.PatientBillsWhereInput>;
export const PatientBillsWhereInputObjectZodSchema = patientbillswhereinputSchema;
