import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderCreateWithoutAppointmentInputObjectSchema as ReminderCreateWithoutAppointmentInputObjectSchema } from './ReminderCreateWithoutAppointmentInput.schema';
import { ReminderUncheckedCreateWithoutAppointmentInputObjectSchema as ReminderUncheckedCreateWithoutAppointmentInputObjectSchema } from './ReminderUncheckedCreateWithoutAppointmentInput.schema';
import { ReminderCreateOrConnectWithoutAppointmentInputObjectSchema as ReminderCreateOrConnectWithoutAppointmentInputObjectSchema } from './ReminderCreateOrConnectWithoutAppointmentInput.schema';
import { AppointmentReminderCreateManyAppointmentInputEnvelopeObjectSchema as ReminderCreateManyAppointmentInputEnvelopeObjectSchema } from './ReminderCreateManyAppointmentInputEnvelope.schema';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReminderCreateWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderCreateWithoutAppointmentInputObjectSchema).array(), z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReminderCreateManyAppointmentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReminderWhereUniqueInputObjectSchema), z.lazy(() => ReminderWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReminderUncheckedCreateNestedManyWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.ReminderUncheckedCreateNestedManyWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderUncheckedCreateNestedManyWithoutAppointmentInput>;
export const ReminderUncheckedCreateNestedManyWithoutAppointmentInputObjectZodSchema = makeSchema();
