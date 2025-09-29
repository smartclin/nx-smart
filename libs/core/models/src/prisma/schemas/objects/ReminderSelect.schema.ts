import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentArgsObjectSchema as AppointmentArgsObjectSchema } from './AppointmentArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  appointmentId: z.boolean().optional(),
  appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsObjectSchema)]).optional(),
  method: z.boolean().optional(),
  sentAt: z.boolean().optional(),
  status: z.boolean().optional()
}).strict();
export const ReminderSelectObjectSchema: z.ZodType<Prisma.ReminderSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReminderSelect>;
export const ReminderSelectObjectZodSchema = makeSchema();
