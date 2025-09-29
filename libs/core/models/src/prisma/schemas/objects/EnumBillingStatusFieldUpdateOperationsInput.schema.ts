import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingStatusSchema } from '../enums/BillingStatus.schema'

const makeSchema = () => z.object({
  set: BillingStatusSchema.optional()
}).strict();
export const EnumBillingStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumBillingStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumBillingStatusFieldUpdateOperationsInput>;
export const EnumBillingStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
