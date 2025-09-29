import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const prescriptionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PrescriptionScalarWhereInputObjectSchema), z.lazy(() => PrescriptionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PrescriptionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PrescriptionScalarWhereInputObjectSchema), z.lazy(() => PrescriptionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  medicalRecordId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  doctorId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  medicationName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dosage: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  frequency: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  duration: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  instructions: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  issuedDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  endDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PrescriptionScalarWhereInputObjectSchema: z.ZodType<Prisma.PrescriptionScalarWhereInput> = prescriptionscalarwhereinputSchema as unknown as z.ZodType<Prisma.PrescriptionScalarWhereInput>;
export const PrescriptionScalarWhereInputObjectZodSchema = prescriptionscalarwhereinputSchema;
