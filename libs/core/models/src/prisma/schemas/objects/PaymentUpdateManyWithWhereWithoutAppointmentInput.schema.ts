import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentScalarWhereInputObjectSchema as PaymentScalarWhereInputObjectSchema } from './PaymentScalarWhereInput.schema';
import { PaymentUpdateManyMutationInputObjectSchema as PaymentUpdateManyMutationInputObjectSchema } from './PaymentUpdateManyMutationInput.schema';
import { PaymentUncheckedUpdateManyWithoutAppointmentInputObjectSchema as PaymentUncheckedUpdateManyWithoutAppointmentInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateManyMutationInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateManyWithoutAppointmentInputObjectSchema)])
}).strict();
export const PaymentUpdateManyWithWhereWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutAppointmentInput>;
export const PaymentUpdateManyWithWhereWithoutAppointmentInputObjectZodSchema = makeSchema();
