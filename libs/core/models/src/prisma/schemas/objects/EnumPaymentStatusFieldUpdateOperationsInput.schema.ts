import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

const makeSchema = () => z.object({
  set: PaymentStatusSchema.optional()
}).strict();
export const EnumPaymentStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPaymentStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumPaymentStatusFieldUpdateOperationsInput>;
export const EnumPaymentStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
