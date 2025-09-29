import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DoctorScalarRelationFilterObjectSchema as DoctorScalarRelationFilterObjectSchema } from './DoctorScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { MedicalRecordsScalarRelationFilterObjectSchema as MedicalRecordsScalarRelationFilterObjectSchema } from './MedicalRecordsScalarRelationFilter.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema'

const diagnosiswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DiagnosisWhereInputObjectSchema), z.lazy(() => DiagnosisWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiagnosisWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiagnosisWhereInputObjectSchema), z.lazy(() => DiagnosisWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  doctor: z.union([z.lazy(() => DoctorScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  medical: z.union([z.lazy(() => MedicalRecordsScalarRelationFilterObjectSchema), z.lazy(() => MedicalRecordsWhereInputObjectSchema)]).optional()
}).strict();
export const DiagnosisWhereInputObjectSchema: z.ZodType<Prisma.DiagnosisWhereInput> = diagnosiswhereinputSchema as unknown as z.ZodType<Prisma.DiagnosisWhereInput>;
export const DiagnosisWhereInputObjectZodSchema = diagnosiswhereinputSchema;
