import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const diagnosisscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DiagnosisScalarWhereInputObjectSchema), z.lazy(() => DiagnosisScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiagnosisScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiagnosisScalarWhereInputObjectSchema), z.lazy(() => DiagnosisScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  medicalId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  symptoms: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  diagnosis: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  prescribedMedications: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  followUpPlan: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DiagnosisScalarWhereInputObjectSchema: z.ZodType<Prisma.DiagnosisScalarWhereInput> = diagnosisscalarwhereinputSchema as unknown as z.ZodType<Prisma.DiagnosisScalarWhereInput>;
export const DiagnosisScalarWhereInputObjectZodSchema = diagnosisscalarwhereinputSchema;
