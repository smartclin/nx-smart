import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema'

const makeSchema = () => z.object({
  set: ReminderStatusSchema.optional()
}).strict();
export const EnumReminderStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumReminderStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumReminderStatusFieldUpdateOperationsInput>;
export const EnumReminderStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
