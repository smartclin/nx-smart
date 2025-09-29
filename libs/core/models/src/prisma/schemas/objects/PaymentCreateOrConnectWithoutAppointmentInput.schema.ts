import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentCreateWithoutAppointmentInputObjectSchema as PaymentCreateWithoutAppointmentInputObjectSchema } from './PaymentCreateWithoutAppointmentInput.schema';
import { PaymentUncheckedCreateWithoutAppointmentInputObjectSchema as PaymentUncheckedCreateWithoutAppointmentInputObjectSchema } from './PaymentUncheckedCreateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PaymentCreateWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputObjectSchema)])
}).strict();
export const PaymentCreateOrConnectWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateOrConnectWithoutAppointmentInput>;
export const PaymentCreateOrConnectWithoutAppointmentInputObjectZodSchema = makeSchema();
