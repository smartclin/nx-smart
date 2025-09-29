import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumNotificationTypeFilterObjectSchema as EnumNotificationTypeFilterObjectSchema } from './EnumNotificationTypeFilter.schema';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const notificationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => NotificationScalarWhereInputObjectSchema), z.lazy(() => NotificationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NotificationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NotificationScalarWhereInputObjectSchema), z.lazy(() => NotificationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumNotificationTypeFilterObjectSchema), NotificationTypeSchema]).optional(),
  read: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const NotificationScalarWhereInputObjectSchema: z.ZodType<Prisma.NotificationScalarWhereInput> = notificationscalarwhereinputSchema as unknown as z.ZodType<Prisma.NotificationScalarWhereInput>;
export const NotificationScalarWhereInputObjectZodSchema = notificationscalarwhereinputSchema;
