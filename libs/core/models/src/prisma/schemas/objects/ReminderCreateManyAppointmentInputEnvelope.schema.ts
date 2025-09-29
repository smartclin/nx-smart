import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentReminderCreateManyAppointmentInputObjectSchema as ReminderCreateManyAppointmentInputObjectSchema } from './ReminderCreateManyAppointmentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReminderCreateManyAppointmentInputObjectSchema), z.lazy(() => ReminderCreateManyAppointmentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReminderCreateManyAppointmentInputEnvelopeObjectSchema: z.ZodType<Prisma.ReminderCreateManyAppointmentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReminderCreateManyAppointmentInputEnvelope>;
export const ReminderCreateManyAppointmentInputEnvelopeObjectZodSchema = makeSchema();
