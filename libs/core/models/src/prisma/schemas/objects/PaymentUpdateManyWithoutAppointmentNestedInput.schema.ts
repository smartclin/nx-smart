import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentCreateWithoutAppointmentInputObjectSchema as PaymentCreateWithoutAppointmentInputObjectSchema } from './PaymentCreateWithoutAppointmentInput.schema';
import { PaymentUncheckedCreateWithoutAppointmentInputObjectSchema as PaymentUncheckedCreateWithoutAppointmentInputObjectSchema } from './PaymentUncheckedCreateWithoutAppointmentInput.schema';
import { PaymentCreateOrConnectWithoutAppointmentInputObjectSchema as PaymentCreateOrConnectWithoutAppointmentInputObjectSchema } from './PaymentCreateOrConnectWithoutAppointmentInput.schema';
import { PaymentUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema as PaymentUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema } from './PaymentUpsertWithWhereUniqueWithoutAppointmentInput.schema';
import { AppointmentPaymentCreateManyAppointmentInputEnvelopeObjectSchema as PaymentCreateManyAppointmentInputEnvelopeObjectSchema } from './PaymentCreateManyAppointmentInputEnvelope.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema as PaymentUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema } from './PaymentUpdateWithWhereUniqueWithoutAppointmentInput.schema';
import { PaymentUpdateManyWithWhereWithoutAppointmentInputObjectSchema as PaymentUpdateManyWithWhereWithoutAppointmentInputObjectSchema } from './PaymentUpdateManyWithWhereWithoutAppointmentInput.schema';
import { PaymentScalarWhereInputObjectSchema as PaymentScalarWhereInputObjectSchema } from './PaymentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentCreateWithoutAppointmentInputObjectSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PaymentCreateOrConnectWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentCreateOrConnectWithoutAppointmentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PaymentUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PaymentCreateManyAppointmentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PaymentUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PaymentUpdateManyWithWhereWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentUpdateManyWithWhereWithoutAppointmentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PaymentScalarWhereInputObjectSchema), z.lazy(() => PaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PaymentUpdateManyWithoutAppointmentNestedInputObjectSchema: z.ZodType<Prisma.PaymentUpdateManyWithoutAppointmentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateManyWithoutAppointmentNestedInput>;
export const PaymentUpdateManyWithoutAppointmentNestedInputObjectZodSchema = makeSchema();
