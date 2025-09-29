import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const diagnosisscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DiagnosisScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DiagnosisScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiagnosisScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiagnosisScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DiagnosisScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  patientId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  medicalId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  doctorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  symptoms: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  diagnosis: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  prescribedMedications: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  followUpPlan: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DiagnosisScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DiagnosisScalarWhereWithAggregatesInput> = diagnosisscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DiagnosisScalarWhereWithAggregatesInput>;
export const DiagnosisScalarWhereWithAggregatesInputObjectZodSchema = diagnosisscalarwherewithaggregatesinputSchema;
