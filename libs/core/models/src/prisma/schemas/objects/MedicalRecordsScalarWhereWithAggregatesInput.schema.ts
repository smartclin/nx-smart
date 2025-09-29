import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const medicalrecordsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  patientId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  appointmentId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  doctorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  treatmentPlan: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  prescriptions: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  labRequest: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MedicalRecordsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MedicalRecordsScalarWhereWithAggregatesInput> = medicalrecordsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MedicalRecordsScalarWhereWithAggregatesInput>;
export const MedicalRecordsScalarWhereWithAggregatesInputObjectZodSchema = medicalrecordsscalarwherewithaggregatesinputSchema;
