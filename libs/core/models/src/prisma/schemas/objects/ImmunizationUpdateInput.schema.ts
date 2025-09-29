import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PatientUpdateOneRequiredWithoutImmunizationsNestedInputObjectSchema as PatientUpdateOneRequiredWithoutImmunizationsNestedInputObjectSchema } from './PatientUpdateOneRequiredWithoutImmunizationsNestedInput.schema';
import { StaffUpdateOneWithoutImmunizationsNestedInputObjectSchema as StaffUpdateOneWithoutImmunizationsNestedInputObjectSchema } from './StaffUpdateOneWithoutImmunizationsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  vaccine: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  dose: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lotNumber: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  patient: z.lazy(() => PatientUpdateOneRequiredWithoutImmunizationsNestedInputObjectSchema).optional(),
  administeredBy: z.lazy(() => StaffUpdateOneWithoutImmunizationsNestedInputObjectSchema).optional()
}).strict();
export const ImmunizationUpdateInputObjectSchema: z.ZodType<Prisma.ImmunizationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUpdateInput>;
export const ImmunizationUpdateInputObjectZodSchema = makeSchema();
