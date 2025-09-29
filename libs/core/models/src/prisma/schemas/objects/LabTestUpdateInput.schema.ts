import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ServicesUpdateOneWithoutLabtestsNestedInputObjectSchema as ServicesUpdateOneWithoutLabtestsNestedInputObjectSchema } from './ServicesUpdateOneWithoutLabtestsNestedInput.schema';
import { MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInputObjectSchema as MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInputObjectSchema } from './MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInput.schema'

const makeSchema = () => z.object({
  testDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  result: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  services: z.lazy(() => ServicesUpdateOneWithoutLabtestsNestedInputObjectSchema).optional(),
  medicalRecord: z.lazy(() => MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInputObjectSchema).optional()
}).strict();
export const LabTestUpdateInputObjectSchema: z.ZodType<Prisma.LabTestUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUpdateInput>;
export const LabTestUpdateInputObjectZodSchema = makeSchema();
