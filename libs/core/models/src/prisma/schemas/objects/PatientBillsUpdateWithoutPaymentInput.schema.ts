import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ServicesUpdateOneRequiredWithoutBillsNestedInputObjectSchema as ServicesUpdateOneRequiredWithoutBillsNestedInputObjectSchema } from './ServicesUpdateOneRequiredWithoutBillsNestedInput.schema'

const makeSchema = () => z.object({
  serviceDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  unitCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  service: z.lazy(() => ServicesUpdateOneRequiredWithoutBillsNestedInputObjectSchema).optional()
}).strict();
export const PatientBillsUpdateWithoutPaymentInputObjectSchema: z.ZodType<Prisma.PatientBillsUpdateWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUpdateWithoutPaymentInput>;
export const PatientBillsUpdateWithoutPaymentInputObjectZodSchema = makeSchema();
