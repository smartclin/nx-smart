import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema';
import { ReminderUpdateWithoutAppointmentInputObjectSchema as ReminderUpdateWithoutAppointmentInputObjectSchema } from './ReminderUpdateWithoutAppointmentInput.schema';
import { ReminderUncheckedUpdateWithoutAppointmentInputObjectSchema as ReminderUncheckedUpdateWithoutAppointmentInputObjectSchema } from './ReminderUncheckedUpdateWithoutAppointmentInput.schema';
import { ReminderCreateWithoutAppointmentInputObjectSchema as ReminderCreateWithoutAppointmentInputObjectSchema } from './ReminderCreateWithoutAppointmentInput.schema';
import { ReminderUncheckedCreateWithoutAppointmentInputObjectSchema as ReminderUncheckedCreateWithoutAppointmentInputObjectSchema } from './ReminderUncheckedCreateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReminderWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReminderUpdateWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderUncheckedUpdateWithoutAppointmentInputObjectSchema)]),
  create: z.union([z.lazy(() => ReminderCreateWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputObjectSchema)])
}).strict();
export const ReminderUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.ReminderUpsertWithWhereUniqueWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderUpsertWithWhereUniqueWithoutAppointmentInput>;
export const ReminderUpsertWithWhereUniqueWithoutAppointmentInputObjectZodSchema = makeSchema();
