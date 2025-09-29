import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DoctorUpdateOneWithoutPrescriptionNestedInputObjectSchema as DoctorUpdateOneWithoutPrescriptionNestedInputObjectSchema } from './DoctorUpdateOneWithoutPrescriptionNestedInput.schema';
import { PatientUpdateOneRequiredWithoutPrescriptionsNestedInputObjectSchema as PatientUpdateOneRequiredWithoutPrescriptionsNestedInputObjectSchema } from './PatientUpdateOneRequiredWithoutPrescriptionsNestedInput.schema'

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
  doctor: z.lazy(() => DoctorUpdateOneWithoutPrescriptionNestedInputObjectSchema).optional(),
  patient: z.lazy(() => PatientUpdateOneRequiredWithoutPrescriptionsNestedInputObjectSchema).optional()
}).strict();
export const PrescriptionUpdateWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateWithoutMedicalRecordInput>;
export const PrescriptionUpdateWithoutMedicalRecordInputObjectZodSchema = makeSchema();
