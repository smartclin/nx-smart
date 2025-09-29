import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumReminderMethodFilterObjectSchema as EnumReminderMethodFilterObjectSchema } from './EnumReminderMethodFilter.schema';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumReminderStatusFilterObjectSchema as EnumReminderStatusFilterObjectSchema } from './EnumReminderStatusFilter.schema';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema'

const reminderscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReminderScalarWhereInputObjectSchema), z.lazy(() => ReminderScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReminderScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReminderScalarWhereInputObjectSchema), z.lazy(() => ReminderScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  appointmentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  method: z.union([z.lazy(() => EnumReminderMethodFilterObjectSchema), ReminderMethodSchema]).optional(),
  sentAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumReminderStatusFilterObjectSchema), ReminderStatusSchema]).optional()
}).strict();
export const ReminderScalarWhereInputObjectSchema: z.ZodType<Prisma.ReminderScalarWhereInput> = reminderscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReminderScalarWhereInput>;
export const ReminderScalarWhereInputObjectZodSchema = reminderscalarwhereinputSchema;
