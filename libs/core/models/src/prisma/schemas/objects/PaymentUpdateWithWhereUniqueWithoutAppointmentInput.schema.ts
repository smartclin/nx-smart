import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutAppointmentInputObjectSchema as PaymentUpdateWithoutAppointmentInputObjectSchema } from './PaymentUpdateWithoutAppointmentInput.schema';
import { PaymentUncheckedUpdateWithoutAppointmentInputObjectSchema as PaymentUncheckedUpdateWithoutAppointmentInputObjectSchema } from './PaymentUncheckedUpdateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateWithoutAppointmentInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutAppointmentInputObjectSchema)])
}).strict();
export const PaymentUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutAppointmentInput>;
export const PaymentUpdateWithWhereUniqueWithoutAppointmentInputObjectZodSchema = makeSchema();
