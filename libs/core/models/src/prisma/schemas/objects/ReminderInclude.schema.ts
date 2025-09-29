import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentArgsObjectSchema as AppointmentArgsObjectSchema } from './AppointmentArgs.schema'

const makeSchema = () => z.object({
  appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsObjectSchema)]).optional()
}).strict();
export const ReminderIncludeObjectSchema: z.ZodType<Prisma.ReminderInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReminderInclude>;
export const ReminderIncludeObjectZodSchema = makeSchema();
