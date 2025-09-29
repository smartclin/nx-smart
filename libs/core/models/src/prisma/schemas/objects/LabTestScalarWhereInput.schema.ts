import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const labtestscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LabTestScalarWhereInputObjectSchema), z.lazy(() => LabTestScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LabTestScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LabTestScalarWhereInputObjectSchema), z.lazy(() => LabTestScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  recordId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  testDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  result: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  serviceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const LabTestScalarWhereInputObjectSchema: z.ZodType<Prisma.LabTestScalarWhereInput> = labtestscalarwhereinputSchema as unknown as z.ZodType<Prisma.LabTestScalarWhereInput>;
export const LabTestScalarWhereInputObjectZodSchema = labtestscalarwhereinputSchema;
