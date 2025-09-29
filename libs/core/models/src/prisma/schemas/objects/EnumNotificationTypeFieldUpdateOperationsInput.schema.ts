import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { NotificationTypeSchema } from '../enums/NotificationType.schema'

const makeSchema = () => z.object({
  set: NotificationTypeSchema.optional()
}).strict();
export const EnumNotificationTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumNotificationTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumNotificationTypeFieldUpdateOperationsInput>;
export const EnumNotificationTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
