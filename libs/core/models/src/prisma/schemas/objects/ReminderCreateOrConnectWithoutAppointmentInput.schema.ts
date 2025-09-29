import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema';
import { ReminderCreateWithoutAppointmentInputObjectSchema as ReminderCreateWithoutAppointmentInputObjectSchema } from './ReminderCreateWithoutAppointmentInput.schema';
import { ReminderUncheckedCreateWithoutAppointmentInputObjectSchema as ReminderUncheckedCreateWithoutAppointmentInputObjectSchema } from './ReminderUncheckedCreateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReminderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReminderCreateWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputObjectSchema)])
}).strict();
export const ReminderCreateOrConnectWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.ReminderCreateOrConnectWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderCreateOrConnectWithoutAppointmentInput>;
export const ReminderCreateOrConnectWithoutAppointmentInputObjectZodSchema = makeSchema();
