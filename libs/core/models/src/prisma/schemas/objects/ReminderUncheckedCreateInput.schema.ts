import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  appointmentId: z.number().int(),
  method: ReminderMethodSchema,
  sentAt: z.coerce.date(),
  status: ReminderStatusSchema
}).strict();
export const ReminderUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ReminderUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderUncheckedCreateInput>;
export const ReminderUncheckedCreateInputObjectZodSchema = makeSchema();
