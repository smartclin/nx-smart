import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { MedicalRecordsScalarRelationFilterObjectSchema as MedicalRecordsScalarRelationFilterObjectSchema } from './MedicalRecordsScalarRelationFilter.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema';
import { DoctorNullableScalarRelationFilterObjectSchema as DoctorNullableScalarRelationFilterObjectSchema } from './DoctorNullableScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { PatientScalarRelationFilterObjectSchema as PatientScalarRelationFilterObjectSchema } from './PatientScalarRelationFilter.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const prescriptionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PrescriptionWhereInputObjectSchema), z.lazy(() => PrescriptionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PrescriptionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PrescriptionWhereInputObjectSchema), z.lazy(() => PrescriptionWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  medicalRecord: z.union([z.lazy(() => MedicalRecordsScalarRelationFilterObjectSchema), z.lazy(() => MedicalRecordsWhereInputObjectSchema)]).optional(),
  doctor: z.union([z.lazy(() => DoctorNullableScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  patient: z.union([z.lazy(() => PatientScalarRelationFilterObjectSchema), z.lazy(() => PatientWhereInputObjectSchema)]).optional()
}).strict();
export const PrescriptionWhereInputObjectSchema: z.ZodType<Prisma.PrescriptionWhereInput> = prescriptionwhereinputSchema as unknown as z.ZodType<Prisma.PrescriptionWhereInput>;
export const PrescriptionWhereInputObjectZodSchema = prescriptionwhereinputSchema;
