import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema';
import { AppointmentCreateNestedOneWithoutRemindersInputObjectSchema as AppointmentCreateNestedOneWithoutRemindersInputObjectSchema } from './AppointmentCreateNestedOneWithoutRemindersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  method: ReminderMethodSchema,
  sentAt: z.coerce.date(),
  status: ReminderStatusSchema,
  appointment: z.lazy(() => AppointmentCreateNestedOneWithoutRemindersInputObjectSchema)
}).strict();
export const ReminderCreateInputObjectSchema: z.ZodType<Prisma.ReminderCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderCreateInput>;
export const ReminderCreateInputObjectZodSchema = makeSchema();
