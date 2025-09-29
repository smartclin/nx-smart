import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  method: ReminderMethodSchema,
  sentAt: z.coerce.date(),
  status: ReminderStatusSchema
}).strict();
export const ReminderCreateManyAppointmentInputObjectSchema: z.ZodType<Prisma.ReminderCreateManyAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderCreateManyAppointmentInput>;
export const ReminderCreateManyAppointmentInputObjectZodSchema = makeSchema();
