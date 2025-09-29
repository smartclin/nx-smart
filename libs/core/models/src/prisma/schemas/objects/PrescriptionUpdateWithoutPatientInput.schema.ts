import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { MedicalRecordsUpdateOneRequiredWithoutPrescriptionsListNestedInputObjectSchema as MedicalRecordsUpdateOneRequiredWithoutPrescriptionsListNestedInputObjectSchema } from './MedicalRecordsUpdateOneRequiredWithoutPrescriptionsListNestedInput.schema';
import { DoctorUpdateOneWithoutPrescriptionNestedInputObjectSchema as DoctorUpdateOneWithoutPrescriptionNestedInputObjectSchema } from './DoctorUpdateOneWithoutPrescriptionNestedInput.schema'

const makeSchema = () => z.object({
  medicationName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dosage: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  frequency: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  duration: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  instructions: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  issuedDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  medicalRecord: z.lazy(() => MedicalRecordsUpdateOneRequiredWithoutPrescriptionsListNestedInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorUpdateOneWithoutPrescriptionNestedInputObjectSchema).optional()
}).strict();
export const PrescriptionUpdateWithoutPatientInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateWithoutPatientInput>;
export const PrescriptionUpdateWithoutPatientInputObjectZodSchema = makeSchema();
