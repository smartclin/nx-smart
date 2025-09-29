import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DoctorUpdateOneRequiredWithoutEncounterNestedInputObjectSchema as DoctorUpdateOneRequiredWithoutEncounterNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutEncounterNestedInput.schema';
import { MedicalRecordsUpdateOneRequiredWithoutEncountersNestedInputObjectSchema as MedicalRecordsUpdateOneRequiredWithoutEncountersNestedInputObjectSchema } from './MedicalRecordsUpdateOneRequiredWithoutEncountersNestedInput.schema';
import { VitalSignsUpdateManyWithoutEncounterNestedInputObjectSchema as VitalSignsUpdateManyWithoutEncounterNestedInputObjectSchema } from './VitalSignsUpdateManyWithoutEncounterNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  diagnosis: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  treatment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutEncounterNestedInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsUpdateOneRequiredWithoutEncountersNestedInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsUpdateManyWithoutEncounterNestedInputObjectSchema).optional()
}).strict();
export const EncounterUpdateWithoutPatientInputObjectSchema: z.ZodType<Prisma.EncounterUpdateWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateWithoutPatientInput>;
export const EncounterUpdateWithoutPatientInputObjectZodSchema = makeSchema();
