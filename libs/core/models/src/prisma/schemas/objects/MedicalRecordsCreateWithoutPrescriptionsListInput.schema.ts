import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateNestedOneWithoutMedicalInputObjectSchema as AppointmentCreateNestedOneWithoutMedicalInputObjectSchema } from './AppointmentCreateNestedOneWithoutMedicalInput.schema';
import { PatientCreateNestedOneWithoutMedicalInputObjectSchema as PatientCreateNestedOneWithoutMedicalInputObjectSchema } from './PatientCreateNestedOneWithoutMedicalInput.schema';
import { DoctorCreateNestedOneWithoutMedicalRecordsInputObjectSchema as DoctorCreateNestedOneWithoutMedicalRecordsInputObjectSchema } from './DoctorCreateNestedOneWithoutMedicalRecordsInput.schema';
import { LabTestCreateNestedManyWithoutMedicalRecordInputObjectSchema as LabTestCreateNestedManyWithoutMedicalRecordInputObjectSchema } from './LabTestCreateNestedManyWithoutMedicalRecordInput.schema';
import { EncounterCreateNestedManyWithoutMedicalInputObjectSchema as EncounterCreateNestedManyWithoutMedicalInputObjectSchema } from './EncounterCreateNestedManyWithoutMedicalInput.schema';
import { DiagnosisCreateNestedManyWithoutMedicalInputObjectSchema as DiagnosisCreateNestedManyWithoutMedicalInputObjectSchema } from './DiagnosisCreateNestedManyWithoutMedicalInput.schema';
import { VitalSignsCreateNestedManyWithoutMedicalInputObjectSchema as VitalSignsCreateNestedManyWithoutMedicalInputObjectSchema } from './VitalSignsCreateNestedManyWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  treatmentPlan: z.string().optional().nullable(),
  prescriptions: z.string().optional().nullable(),
  labRequest: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  appointment: z.lazy(() => AppointmentCreateNestedOneWithoutMedicalInputObjectSchema),
  patient: z.lazy(() => PatientCreateNestedOneWithoutMedicalInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutMedicalRecordsInputObjectSchema),
  labTests: z.lazy(() => LabTestCreateNestedManyWithoutMedicalRecordInputObjectSchema).optional(),
  encounters: z.lazy(() => EncounterCreateNestedManyWithoutMedicalInputObjectSchema).optional(),
  diagnoses: z.lazy(() => DiagnosisCreateNestedManyWithoutMedicalInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsCreateNestedManyWithoutMedicalInputObjectSchema).optional()
}).strict();
export const MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateWithoutPrescriptionsListInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateWithoutPrescriptionsListInput>;
export const MedicalRecordsCreateWithoutPrescriptionsListInputObjectZodSchema = makeSchema();
