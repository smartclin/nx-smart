import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { PatientScalarRelationFilterObjectSchema as PatientScalarRelationFilterObjectSchema } from './PatientScalarRelationFilter.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { DoctorScalarRelationFilterObjectSchema as DoctorScalarRelationFilterObjectSchema } from './DoctorScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { MedicalRecordsScalarRelationFilterObjectSchema as MedicalRecordsScalarRelationFilterObjectSchema } from './MedicalRecordsScalarRelationFilter.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema';
import { VitalSignsListRelationFilterObjectSchema as VitalSignsListRelationFilterObjectSchema } from './VitalSignsListRelationFilter.schema'

const encounterwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EncounterWhereInputObjectSchema), z.lazy(() => EncounterWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EncounterWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EncounterWhereInputObjectSchema), z.lazy(() => EncounterWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  diagnosis: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  treatment: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  medicalId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  patient: z.union([z.lazy(() => PatientScalarRelationFilterObjectSchema), z.lazy(() => PatientWhereInputObjectSchema)]).optional(),
  doctor: z.union([z.lazy(() => DoctorScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  medical: z.union([z.lazy(() => MedicalRecordsScalarRelationFilterObjectSchema), z.lazy(() => MedicalRecordsWhereInputObjectSchema)]).optional(),
  vitalSigns: z.lazy(() => VitalSignsListRelationFilterObjectSchema).optional()
}).strict();
export const EncounterWhereInputObjectSchema: z.ZodType<Prisma.EncounterWhereInput> = encounterwhereinputSchema as unknown as z.ZodType<Prisma.EncounterWhereInput>;
export const EncounterWhereInputObjectZodSchema = encounterwhereinputSchema;
