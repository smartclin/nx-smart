import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutAppointmentInputObjectSchema as PaymentUpdateWithoutAppointmentInputObjectSchema } from './PaymentUpdateWithoutAppointmentInput.schema';
import { PaymentUncheckedUpdateWithoutAppointmentInputObjectSchema as PaymentUncheckedUpdateWithoutAppointmentInputObjectSchema } from './PaymentUncheckedUpdateWithoutAppointmentInput.schema';
import { PaymentCreateWithoutAppointmentInputObjectSchema as PaymentCreateWithoutAppointmentInputObjectSchema } from './PaymentCreateWithoutAppointmentInput.schema';
import { PaymentUncheckedCreateWithoutAppointmentInputObjectSchema as PaymentUncheckedCreateWithoutAppointmentInputObjectSchema } from './PaymentUncheckedCreateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PaymentUpdateWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutAppointmentInputObjectSchema)]),
  create: z.union([z.lazy(() => PaymentCreateWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputObjectSchema)])
}).strict();
export const PaymentUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutAppointmentInput>;
export const PaymentUpsertWithWhereUniqueWithoutAppointmentInputObjectZodSchema = makeSchema();
