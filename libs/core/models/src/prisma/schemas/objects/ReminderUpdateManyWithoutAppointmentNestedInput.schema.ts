import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderCreateWithoutAppointmentInputObjectSchema as ReminderCreateWithoutAppointmentInputObjectSchema } from './ReminderCreateWithoutAppointmentInput.schema';
import { ReminderUncheckedCreateWithoutAppointmentInputObjectSchema as ReminderUncheckedCreateWithoutAppointmentInputObjectSchema } from './ReminderUncheckedCreateWithoutAppointmentInput.schema';
import { ReminderCreateOrConnectWithoutAppointmentInputObjectSchema as ReminderCreateOrConnectWithoutAppointmentInputObjectSchema } from './ReminderCreateOrConnectWithoutAppointmentInput.schema';
import { ReminderUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema as ReminderUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema } from './ReminderUpsertWithWhereUniqueWithoutAppointmentInput.schema';
import { AppointmentReminderCreateManyAppointmentInputEnvelopeObjectSchema as ReminderCreateManyAppointmentInputEnvelopeObjectSchema } from './ReminderCreateManyAppointmentInputEnvelope.schema';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema';
import { ReminderUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema as ReminderUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema } from './ReminderUpdateWithWhereUniqueWithoutAppointmentInput.schema';
import { ReminderUpdateManyWithWhereWithoutAppointmentInputObjectSchema as ReminderUpdateManyWithWhereWithoutAppointmentInputObjectSchema } from './ReminderUpdateManyWithWhereWithoutAppointmentInput.schema';
import { ReminderScalarWhereInputObjectSchema as ReminderScalarWhereInputObjectSchema } from './ReminderScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReminderCreateWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderCreateWithoutAppointmentInputObjectSchema).array(), z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReminderUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReminderCreateManyAppointmentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReminderWhereUniqueInputObjectSchema), z.lazy(() => ReminderWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReminderWhereUniqueInputObjectSchema), z.lazy(() => ReminderWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReminderWhereUniqueInputObjectSchema), z.lazy(() => ReminderWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReminderWhereUniqueInputObjectSchema), z.lazy(() => ReminderWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReminderUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReminderUpdateManyWithWhereWithoutAppointmentInputObjectSchema), z.lazy(() => ReminderUpdateManyWithWhereWithoutAppointmentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReminderScalarWhereInputObjectSchema), z.lazy(() => ReminderScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReminderUpdateManyWithoutAppointmentNestedInputObjectSchema: z.ZodType<Prisma.ReminderUpdateManyWithoutAppointmentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderUpdateManyWithoutAppointmentNestedInput>;
export const ReminderUpdateManyWithoutAppointmentNestedInputObjectZodSchema = makeSchema();
