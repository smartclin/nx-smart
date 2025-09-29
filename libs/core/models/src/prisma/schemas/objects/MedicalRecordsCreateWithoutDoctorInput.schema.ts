import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateNestedOneWithoutMedicalInputObjectSchema as AppointmentCreateNestedOneWithoutMedicalInputObjectSchema } from './AppointmentCreateNestedOneWithoutMedicalInput.schema';
import { PatientCreateNestedOneWithoutMedicalInputObjectSchema as PatientCreateNestedOneWithoutMedicalInputObjectSchema } from './PatientCreateNestedOneWithoutMedicalInput.schema';
import { LabTestCreateNestedManyWithoutMedicalRecordInputObjectSchema as LabTestCreateNestedManyWithoutMedicalRecordInputObjectSchema } from './LabTestCreateNestedManyWithoutMedicalRecordInput.schema';
import { EncounterCreateNestedManyWithoutMedicalInputObjectSchema as EncounterCreateNestedManyWithoutMedicalInputObjectSchema } from './EncounterCreateNestedManyWithoutMedicalInput.schema';
import { DiagnosisCreateNestedManyWithoutMedicalInputObjectSchema as DiagnosisCreateNestedManyWithoutMedicalInputObjectSchema } from './DiagnosisCreateNestedManyWithoutMedicalInput.schema';
import { PrescriptionCreateNestedManyWithoutMedicalRecordInputObjectSchema as PrescriptionCreateNestedManyWithoutMedicalRecordInputObjectSchema } from './PrescriptionCreateNestedManyWithoutMedicalRecordInput.schema';
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
  labTests: z.lazy(() => LabTestCreateNestedManyWithoutMedicalRecordInputObjectSchema).optional(),
  encounters: z.lazy(() => EncounterCreateNestedManyWithoutMedicalInputObjectSchema).optional(),
  diagnoses: z.lazy(() => DiagnosisCreateNestedManyWithoutMedicalInputObjectSchema).optional(),
  prescriptionsList: z.lazy(() => PrescriptionCreateNestedManyWithoutMedicalRecordInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsCreateNestedManyWithoutMedicalInputObjectSchema).optional()
}).strict();
export const MedicalRecordsCreateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateWithoutDoctorInput>;
export const MedicalRecordsCreateWithoutDoctorInputObjectZodSchema = makeSchema();
