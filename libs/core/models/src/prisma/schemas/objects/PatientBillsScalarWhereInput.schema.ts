import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema'

const patientbillsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PatientBillsScalarWhereInputObjectSchema), z.lazy(() => PatientBillsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PatientBillsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PatientBillsScalarWhereInputObjectSchema), z.lazy(() => PatientBillsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  billId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  serviceId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  serviceDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  unitCost: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  totalCost: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PatientBillsScalarWhereInputObjectSchema: z.ZodType<Prisma.PatientBillsScalarWhereInput> = patientbillsscalarwhereinputSchema as unknown as z.ZodType<Prisma.PatientBillsScalarWhereInput>;
export const PatientBillsScalarWhereInputObjectZodSchema = patientbillsscalarwhereinputSchema;
