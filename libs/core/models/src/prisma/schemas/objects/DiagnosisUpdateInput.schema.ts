import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DoctorUpdateOneRequiredWithoutDiagnosisNestedInputObjectSchema as DoctorUpdateOneRequiredWithoutDiagnosisNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutDiagnosisNestedInput.schema';
import { MedicalRecordsUpdateOneRequiredWithoutDiagnosesNestedInputObjectSchema as MedicalRecordsUpdateOneRequiredWithoutDiagnosesNestedInputObjectSchema } from './MedicalRecordsUpdateOneRequiredWithoutDiagnosesNestedInput.schema'

const makeSchema = () => z.object({
  patientId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  symptoms: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  diagnosis: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  prescribedMedications: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  followUpPlan: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutDiagnosisNestedInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsUpdateOneRequiredWithoutDiagnosesNestedInputObjectSchema).optional()
}).strict();
export const DiagnosisUpdateInputObjectSchema: z.ZodType<Prisma.DiagnosisUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUpdateInput>;
export const DiagnosisUpdateInputObjectZodSchema = makeSchema();
