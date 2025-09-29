import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { NotificationTypeSchema } from '../enums/NotificationType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  message: z.string(),
  type: NotificationTypeSchema,
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const NotificationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput>;
export const NotificationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
