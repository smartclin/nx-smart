import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumReminderMethodWithAggregatesFilterObjectSchema as EnumReminderMethodWithAggregatesFilterObjectSchema } from './EnumReminderMethodWithAggregatesFilter.schema';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumReminderStatusWithAggregatesFilterObjectSchema as EnumReminderStatusWithAggregatesFilterObjectSchema } from './EnumReminderStatusWithAggregatesFilter.schema';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema'

const reminderscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReminderScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReminderScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReminderScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReminderScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReminderScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  appointmentId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  method: z.union([z.lazy(() => EnumReminderMethodWithAggregatesFilterObjectSchema), ReminderMethodSchema]).optional(),
  sentAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumReminderStatusWithAggregatesFilterObjectSchema), ReminderStatusSchema]).optional()
}).strict();
export const ReminderScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReminderScalarWhereWithAggregatesInput> = reminderscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReminderScalarWhereWithAggregatesInput>;
export const ReminderScalarWhereWithAggregatesInputObjectZodSchema = reminderscalarwherewithaggregatesinputSchema;
