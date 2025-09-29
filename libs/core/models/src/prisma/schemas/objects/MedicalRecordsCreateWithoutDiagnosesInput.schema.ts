import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateNestedOneWithoutMedicalInputObjectSchema as AppointmentCreateNestedOneWithoutMedicalInputObjectSchema } from './AppointmentCreateNestedOneWithoutMedicalInput.schema';
import { PatientCreateNestedOneWithoutMedicalInputObjectSchema as PatientCreateNestedOneWithoutMedicalInputObjectSchema } from './PatientCreateNestedOneWithoutMedicalInput.schema';
import { DoctorCreateNestedOneWithoutMedicalRecordsInputObjectSchema as DoctorCreateNestedOneWithoutMedicalRecordsInputObjectSchema } from './DoctorCreateNestedOneWithoutMedicalRecordsInput.schema';
import { LabTestCreateNestedManyWithoutMedicalRecordInputObjectSchema as LabTestCreateNestedManyWithoutMedicalRecordInputObjectSchema } from './LabTestCreateNestedManyWithoutMedicalRecordInput.schema';
import { EncounterCreateNestedManyWithoutMedicalInputObjectSchema as EncounterCreateNestedManyWithoutMedicalInputObjectSchema } from './EncounterCreateNestedManyWithoutMedicalInput.schema';
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
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutMedicalRecordsInputObjectSchema),
  labTests: z.lazy(() => LabTestCreateNestedManyWithoutMedicalRecordInputObjectSchema).optional(),
  encounters: z.lazy(() => EncounterCreateNestedManyWithoutMedicalInputObjectSchema).optional(),
  prescriptionsList: z.lazy(() => PrescriptionCreateNestedManyWithoutMedicalRecordInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsCreateNestedManyWithoutMedicalInputObjectSchema).optional()
}).strict();
export const MedicalRecordsCreateWithoutDiagnosesInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateWithoutDiagnosesInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateWithoutDiagnosesInput>;
export const MedicalRecordsCreateWithoutDiagnosesInputObjectZodSchema = makeSchema();
