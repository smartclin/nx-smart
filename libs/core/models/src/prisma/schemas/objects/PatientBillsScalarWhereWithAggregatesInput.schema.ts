import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

const patientbillsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PatientBillsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PatientBillsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PatientBillsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PatientBillsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PatientBillsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  billId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  serviceId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  serviceDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  unitCost: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  totalCost: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PatientBillsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PatientBillsScalarWhereWithAggregatesInput> = patientbillsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PatientBillsScalarWhereWithAggregatesInput>;
export const PatientBillsScalarWhereWithAggregatesInputObjectZodSchema = patientbillsscalarwherewithaggregatesinputSchema;
