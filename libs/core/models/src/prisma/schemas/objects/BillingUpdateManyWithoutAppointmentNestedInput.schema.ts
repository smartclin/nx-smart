import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingCreateWithoutAppointmentInputObjectSchema as BillingCreateWithoutAppointmentInputObjectSchema } from './BillingCreateWithoutAppointmentInput.schema';
import { BillingUncheckedCreateWithoutAppointmentInputObjectSchema as BillingUncheckedCreateWithoutAppointmentInputObjectSchema } from './BillingUncheckedCreateWithoutAppointmentInput.schema';
import { BillingCreateOrConnectWithoutAppointmentInputObjectSchema as BillingCreateOrConnectWithoutAppointmentInputObjectSchema } from './BillingCreateOrConnectWithoutAppointmentInput.schema';
import { BillingUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema as BillingUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema } from './BillingUpsertWithWhereUniqueWithoutAppointmentInput.schema';
import { AppointmentBillingCreateManyAppointmentInputEnvelopeObjectSchema as BillingCreateManyAppointmentInputEnvelopeObjectSchema } from './BillingCreateManyAppointmentInputEnvelope.schema';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './BillingWhereUniqueInput.schema';
import { BillingUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema as BillingUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema } from './BillingUpdateWithWhereUniqueWithoutAppointmentInput.schema';
import { BillingUpdateManyWithWhereWithoutAppointmentInputObjectSchema as BillingUpdateManyWithWhereWithoutAppointmentInputObjectSchema } from './BillingUpdateManyWithWhereWithoutAppointmentInput.schema';
import { BillingScalarWhereInputObjectSchema as BillingScalarWhereInputObjectSchema } from './BillingScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillingCreateWithoutAppointmentInputObjectSchema), z.lazy(() => BillingCreateWithoutAppointmentInputObjectSchema).array(), z.lazy(() => BillingUncheckedCreateWithoutAppointmentInputObjectSchema), z.lazy(() => BillingUncheckedCreateWithoutAppointmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BillingCreateOrConnectWithoutAppointmentInputObjectSchema), z.lazy(() => BillingCreateOrConnectWithoutAppointmentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BillingUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema), z.lazy(() => BillingUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BillingCreateManyAppointmentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BillingWhereUniqueInputObjectSchema), z.lazy(() => BillingWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BillingWhereUniqueInputObjectSchema), z.lazy(() => BillingWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BillingWhereUniqueInputObjectSchema), z.lazy(() => BillingWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BillingWhereUniqueInputObjectSchema), z.lazy(() => BillingWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BillingUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema), z.lazy(() => BillingUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BillingUpdateManyWithWhereWithoutAppointmentInputObjectSchema), z.lazy(() => BillingUpdateManyWithWhereWithoutAppointmentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BillingScalarWhereInputObjectSchema), z.lazy(() => BillingScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BillingUpdateManyWithoutAppointmentNestedInputObjectSchema: z.ZodType<Prisma.BillingUpdateManyWithoutAppointmentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingUpdateManyWithoutAppointmentNestedInput>;
export const BillingUpdateManyWithoutAppointmentNestedInputObjectZodSchema = makeSchema();
