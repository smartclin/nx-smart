import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ServicesUpdateOneRequiredWithoutBillsNestedInputObjectSchema as ServicesUpdateOneRequiredWithoutBillsNestedInputObjectSchema } from './ServicesUpdateOneRequiredWithoutBillsNestedInput.schema';
import { PaymentUpdateOneRequiredWithoutBillsNestedInputObjectSchema as PaymentUpdateOneRequiredWithoutBillsNestedInputObjectSchema } from './PaymentUpdateOneRequiredWithoutBillsNestedInput.schema'

const makeSchema = () => z.object({
  serviceDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  unitCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  service: z.lazy(() => ServicesUpdateOneRequiredWithoutBillsNestedInputObjectSchema).optional(),
  payment: z.lazy(() => PaymentUpdateOneRequiredWithoutBillsNestedInputObjectSchema).optional()
}).strict();
export const PatientBillsUpdateInputObjectSchema: z.ZodType<Prisma.PatientBillsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUpdateInput>;
export const PatientBillsUpdateInputObjectZodSchema = makeSchema();
