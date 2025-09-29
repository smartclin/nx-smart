import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema';
import { ReminderUpdateWithoutAppointmentInputObjectSchema as ReminderUpdateWithoutAppointmentInputObjectSchema } from './ReminderUpdateWithoutAppointmentInput.schema';
import { ReminderUncheckedUpdateWithoutAppointmentInputObjectSchema as ReminderUncheckedUpdateWithoutAppointmentInputObjectSchema } from './ReminderUncheckedUpdateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReminderWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReminderUpdateWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderUncheckedUpdateWithoutAppointmentInputObjectSchema)])
}).strict();
export const ReminderUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.ReminderUpdateWithWhereUniqueWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderUpdateWithWhereUniqueWithoutAppointmentInput>;
export const ReminderUpdateWithWhereUniqueWithoutAppointmentInputObjectZodSchema = makeSchema();
