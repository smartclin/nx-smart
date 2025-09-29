import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DoctorUpdateOneRequiredWithoutWorkingDaysNestedInputObjectSchema as DoctorUpdateOneRequiredWithoutWorkingDaysNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutWorkingDaysNestedInput.schema'

const makeSchema = () => z.object({
  day: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startTime: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  closeTime: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutWorkingDaysNestedInputObjectSchema).optional()
}).strict();
export const WorkingDaysUpdateInputObjectSchema: z.ZodType<Prisma.WorkingDaysUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysUpdateInput>;
export const WorkingDaysUpdateInputObjectZodSchema = makeSchema();
