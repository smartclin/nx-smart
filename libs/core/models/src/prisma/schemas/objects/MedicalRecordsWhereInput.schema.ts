import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AppointmentScalarRelationFilterObjectSchema as AppointmentScalarRelationFilterObjectSchema } from './AppointmentScalarRelationFilter.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema';
import { PatientScalarRelationFilterObjectSchema as PatientScalarRelationFilterObjectSchema } from './PatientScalarRelationFilter.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { DoctorScalarRelationFilterObjectSchema as DoctorScalarRelationFilterObjectSchema } from './DoctorScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { LabTestListRelationFilterObjectSchema as LabTestListRelationFilterObjectSchema } from './LabTestListRelationFilter.schema';
import { EncounterListRelationFilterObjectSchema as EncounterListRelationFilterObjectSchema } from './EncounterListRelationFilter.schema';
import { DiagnosisListRelationFilterObjectSchema as DiagnosisListRelationFilterObjectSchema } from './DiagnosisListRelationFilter.schema';
import { PrescriptionListRelationFilterObjectSchema as PrescriptionListRelationFilterObjectSchema } from './PrescriptionListRelationFilter.schema';
import { VitalSignsListRelationFilterObjectSchema as VitalSignsListRelationFilterObjectSchema } from './VitalSignsListRelationFilter.schema'

const medicalrecordswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MedicalRecordsWhereInputObjectSchema), z.lazy(() => MedicalRecordsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MedicalRecordsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MedicalRecordsWhereInputObjectSchema), z.lazy(() => MedicalRecordsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  appointmentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  treatmentPlan: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  prescriptions: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  labRequest: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  appointment: z.union([z.lazy(() => AppointmentScalarRelationFilterObjectSchema), z.lazy(() => AppointmentWhereInputObjectSchema)]).optional(),
  patient: z.union([z.lazy(() => PatientScalarRelationFilterObjectSchema), z.lazy(() => PatientWhereInputObjectSchema)]).optional(),
  doctor: z.union([z.lazy(() => DoctorScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  labTests: z.lazy(() => LabTestListRelationFilterObjectSchema).optional(),
  encounters: z.lazy(() => EncounterListRelationFilterObjectSchema).optional(),
  diagnoses: z.lazy(() => DiagnosisListRelationFilterObjectSchema).optional(),
  prescriptionsList: z.lazy(() => PrescriptionListRelationFilterObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsListRelationFilterObjectSchema).optional()
}).strict();
export const MedicalRecordsWhereInputObjectSchema: z.ZodType<Prisma.MedicalRecordsWhereInput> = medicalrecordswhereinputSchema as unknown as z.ZodType<Prisma.MedicalRecordsWhereInput>;
export const MedicalRecordsWhereInputObjectZodSchema = medicalrecordswhereinputSchema;
