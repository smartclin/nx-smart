import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestUncheckedCreateNestedManyWithoutMedicalRecordInputObjectSchema as LabTestUncheckedCreateNestedManyWithoutMedicalRecordInputObjectSchema } from './LabTestUncheckedCreateNestedManyWithoutMedicalRecordInput.schema';
import { EncounterUncheckedCreateNestedManyWithoutMedicalInputObjectSchema as EncounterUncheckedCreateNestedManyWithoutMedicalInputObjectSchema } from './EncounterUncheckedCreateNestedManyWithoutMedicalInput.schema';
import { PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInputObjectSchema as PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInputObjectSchema } from './PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput.schema';
import { VitalSignsUncheckedCreateNestedManyWithoutMedicalInputObjectSchema as VitalSignsUncheckedCreateNestedManyWithoutMedicalInputObjectSchema } from './VitalSignsUncheckedCreateNestedManyWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  patientId: z.string(),
  appointmentId: z.number().int(),
  doctorId: z.string(),
  treatmentPlan: z.string().optional().nullable(),
  prescriptions: z.string().optional().nullable(),
  labRequest: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  labTests: z.lazy(() => LabTestUncheckedCreateNestedManyWithoutMedicalRecordInputObjectSchema).optional(),
  encounters: z.lazy(() => EncounterUncheckedCreateNestedManyWithoutMedicalInputObjectSchema).optional(),
  prescriptionsList: z.lazy(() => PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsUncheckedCreateNestedManyWithoutMedicalInputObjectSchema).optional()
}).strict();
export const MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUncheckedCreateWithoutDiagnosesInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUncheckedCreateWithoutDiagnosesInput>;
export const MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectZodSchema = makeSchema();
