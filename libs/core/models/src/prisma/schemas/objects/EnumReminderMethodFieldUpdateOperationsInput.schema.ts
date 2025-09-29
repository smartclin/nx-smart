import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema'

const makeSchema = () => z.object({
  set: ReminderMethodSchema.optional()
}).strict();
export const EnumReminderMethodFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumReminderMethodFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumReminderMethodFieldUpdateOperationsInput>;
export const EnumReminderMethodFieldUpdateOperationsInputObjectZodSchema = makeSchema();
