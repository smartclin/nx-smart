import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInputObjectSchema as LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInputObjectSchema } from './LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInput.schema';
import { EncounterUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema as EncounterUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema } from './EncounterUncheckedUpdateManyWithoutMedicalNestedInput.schema';
import { DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema as DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema } from './DiagnosisUncheckedUpdateManyWithoutMedicalNestedInput.schema';
import { PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInputObjectSchema as PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInputObjectSchema } from './PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput.schema';
import { VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema as VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema } from './VitalSignsUncheckedUpdateManyWithoutMedicalNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  appointmentId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  doctorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  treatmentPlan: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  prescriptions: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  labRequest: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  labTests: z.lazy(() => LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInputObjectSchema).optional(),
  encounters: z.lazy(() => EncounterUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema).optional(),
  diagnoses: z.lazy(() => DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema).optional(),
  prescriptionsList: z.lazy(() => PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema).optional()
}).strict();
export const MedicalRecordsUncheckedUpdateWithoutPatientInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUncheckedUpdateWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUncheckedUpdateWithoutPatientInput>;
export const MedicalRecordsUncheckedUpdateWithoutPatientInputObjectZodSchema = makeSchema();
