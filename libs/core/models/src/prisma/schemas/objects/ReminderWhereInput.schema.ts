import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumReminderMethodFilterObjectSchema as EnumReminderMethodFilterObjectSchema } from './EnumReminderMethodFilter.schema';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumReminderStatusFilterObjectSchema as EnumReminderStatusFilterObjectSchema } from './EnumReminderStatusFilter.schema';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema';
import { AppointmentScalarRelationFilterObjectSchema as AppointmentScalarRelationFilterObjectSchema } from './AppointmentScalarRelationFilter.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema'

const reminderwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReminderWhereInputObjectSchema), z.lazy(() => ReminderWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReminderWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReminderWhereInputObjectSchema), z.lazy(() => ReminderWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  appointmentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  method: z.union([z.lazy(() => EnumReminderMethodFilterObjectSchema), ReminderMethodSchema]).optional(),
  sentAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumReminderStatusFilterObjectSchema), ReminderStatusSchema]).optional(),
  appointment: z.union([z.lazy(() => AppointmentScalarRelationFilterObjectSchema), z.lazy(() => AppointmentWhereInputObjectSchema)]).optional()
}).strict();
export const ReminderWhereInputObjectSchema: z.ZodType<Prisma.ReminderWhereInput> = reminderwhereinputSchema as unknown as z.ZodType<Prisma.ReminderWhereInput>;
export const ReminderWhereInputObjectZodSchema = reminderwhereinputSchema;
