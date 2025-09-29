import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInputObjectSchema as MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInputObjectSchema } from './MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInput.schema'

const makeSchema = () => z.object({
  testDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  result: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  medicalRecord: z.lazy(() => MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInputObjectSchema).optional()
}).strict();
export const LabTestUpdateWithoutServicesInputObjectSchema: z.ZodType<Prisma.LabTestUpdateWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUpdateWithoutServicesInput>;
export const LabTestUpdateWithoutServicesInputObjectZodSchema = makeSchema();
