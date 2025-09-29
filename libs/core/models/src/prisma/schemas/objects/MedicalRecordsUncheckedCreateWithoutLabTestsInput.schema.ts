import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterUncheckedCreateNestedManyWithoutMedicalInputObjectSchema as EncounterUncheckedCreateNestedManyWithoutMedicalInputObjectSchema } from './EncounterUncheckedCreateNestedManyWithoutMedicalInput.schema';
import { DiagnosisUncheckedCreateNestedManyWithoutMedicalInputObjectSchema as DiagnosisUncheckedCreateNestedManyWithoutMedicalInputObjectSchema } from './DiagnosisUncheckedCreateNestedManyWithoutMedicalInput.schema';
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
  encounters: z.lazy(() => EncounterUncheckedCreateNestedManyWithoutMedicalInputObjectSchema).optional(),
  diagnoses: z.lazy(() => DiagnosisUncheckedCreateNestedManyWithoutMedicalInputObjectSchema).optional(),
  prescriptionsList: z.lazy(() => PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsUncheckedCreateNestedManyWithoutMedicalInputObjectSchema).optional()
}).strict();
export const MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUncheckedCreateWithoutLabTestsInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUncheckedCreateWithoutLabTestsInput>;
export const MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectZodSchema = makeSchema();
