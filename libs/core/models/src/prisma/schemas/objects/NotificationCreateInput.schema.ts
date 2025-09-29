import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { UserCreateNestedOneWithoutNotificationInputObjectSchema as UserCreateNestedOneWithoutNotificationInputObjectSchema } from './UserCreateNestedOneWithoutNotificationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  message: z.string(),
  type: NotificationTypeSchema,
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutNotificationInputObjectSchema)
}).strict();
export const NotificationCreateInputObjectSchema: z.ZodType<Prisma.NotificationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateInput>;
export const NotificationCreateInputObjectZodSchema = makeSchema();
