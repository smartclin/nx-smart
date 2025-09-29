import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PatientUpdateOneRequiredWithoutEncountersNestedInputObjectSchema as PatientUpdateOneRequiredWithoutEncountersNestedInputObjectSchema } from './PatientUpdateOneRequiredWithoutEncountersNestedInput.schema';
import { DoctorUpdateOneRequiredWithoutEncounterNestedInputObjectSchema as DoctorUpdateOneRequiredWithoutEncounterNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutEncounterNestedInput.schema';
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
  patient: z.lazy(() => PatientUpdateOneRequiredWithoutEncountersNestedInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutEncounterNestedInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsUpdateManyWithoutEncounterNestedInputObjectSchema).optional()
}).strict();
export const EncounterUpdateWithoutMedicalInputObjectSchema: z.ZodType<Prisma.EncounterUpdateWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateWithoutMedicalInput>;
export const EncounterUpdateWithoutMedicalInputObjectZodSchema = makeSchema();
