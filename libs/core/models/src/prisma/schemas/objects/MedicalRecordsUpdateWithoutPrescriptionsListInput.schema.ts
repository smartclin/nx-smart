import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AppointmentUpdateOneRequiredWithoutMedicalNestedInputObjectSchema as AppointmentUpdateOneRequiredWithoutMedicalNestedInputObjectSchema } from './AppointmentUpdateOneRequiredWithoutMedicalNestedInput.schema';
import { PatientUpdateOneRequiredWithoutMedicalNestedInputObjectSchema as PatientUpdateOneRequiredWithoutMedicalNestedInputObjectSchema } from './PatientUpdateOneRequiredWithoutMedicalNestedInput.schema';
import { DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInputObjectSchema as DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput.schema';
import { LabTestUpdateManyWithoutMedicalRecordNestedInputObjectSchema as LabTestUpdateManyWithoutMedicalRecordNestedInputObjectSchema } from './LabTestUpdateManyWithoutMedicalRecordNestedInput.schema';
import { EncounterUpdateManyWithoutMedicalNestedInputObjectSchema as EncounterUpdateManyWithoutMedicalNestedInputObjectSchema } from './EncounterUpdateManyWithoutMedicalNestedInput.schema';
import { DiagnosisUpdateManyWithoutMedicalNestedInputObjectSchema as DiagnosisUpdateManyWithoutMedicalNestedInputObjectSchema } from './DiagnosisUpdateManyWithoutMedicalNestedInput.schema';
import { VitalSignsUpdateManyWithoutMedicalNestedInputObjectSchema as VitalSignsUpdateManyWithoutMedicalNestedInputObjectSchema } from './VitalSignsUpdateManyWithoutMedicalNestedInput.schema'

const makeSchema = () => z.object({
  treatmentPlan: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  prescriptions: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  labRequest: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  appointment: z.lazy(() => AppointmentUpdateOneRequiredWithoutMedicalNestedInputObjectSchema).optional(),
  patient: z.lazy(() => PatientUpdateOneRequiredWithoutMedicalNestedInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInputObjectSchema).optional(),
  labTests: z.lazy(() => LabTestUpdateManyWithoutMedicalRecordNestedInputObjectSchema).optional(),
  encounters: z.lazy(() => EncounterUpdateManyWithoutMedicalNestedInputObjectSchema).optional(),
  diagnoses: z.lazy(() => DiagnosisUpdateManyWithoutMedicalNestedInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsUpdateManyWithoutMedicalNestedInputObjectSchema).optional()
}).strict();
export const MedicalRecordsUpdateWithoutPrescriptionsListInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateWithoutPrescriptionsListInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateWithoutPrescriptionsListInput>;
export const MedicalRecordsUpdateWithoutPrescriptionsListInputObjectZodSchema = makeSchema();
