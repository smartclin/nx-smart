import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentCreateWithoutAppointmentInputObjectSchema as PaymentCreateWithoutAppointmentInputObjectSchema } from './PaymentCreateWithoutAppointmentInput.schema';
import { PaymentUncheckedCreateWithoutAppointmentInputObjectSchema as PaymentUncheckedCreateWithoutAppointmentInputObjectSchema } from './PaymentUncheckedCreateWithoutAppointmentInput.schema';
import { PaymentCreateOrConnectWithoutAppointmentInputObjectSchema as PaymentCreateOrConnectWithoutAppointmentInputObjectSchema } from './PaymentCreateOrConnectWithoutAppointmentInput.schema';
import { AppointmentPaymentCreateManyAppointmentInputEnvelopeObjectSchema as PaymentCreateManyAppointmentInputEnvelopeObjectSchema } from './PaymentCreateManyAppointmentInputEnvelope.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentCreateWithoutAppointmentInputObjectSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PaymentCreateOrConnectWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentCreateOrConnectWithoutAppointmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PaymentCreateManyAppointmentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PaymentCreateNestedManyWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateNestedManyWithoutAppointmentInput>;
export const PaymentCreateNestedManyWithoutAppointmentInputObjectZodSchema = makeSchema();
