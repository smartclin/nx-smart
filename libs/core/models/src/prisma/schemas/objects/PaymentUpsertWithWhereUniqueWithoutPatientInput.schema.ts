import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutPatientInputObjectSchema as PaymentUpdateWithoutPatientInputObjectSchema } from './PaymentUpdateWithoutPatientInput.schema';
import { PaymentUncheckedUpdateWithoutPatientInputObjectSchema as PaymentUncheckedUpdateWithoutPatientInputObjectSchema } from './PaymentUncheckedUpdateWithoutPatientInput.schema';
import { PaymentCreateWithoutPatientInputObjectSchema as PaymentCreateWithoutPatientInputObjectSchema } from './PaymentCreateWithoutPatientInput.schema';
import { PaymentUncheckedCreateWithoutPatientInputObjectSchema as PaymentUncheckedCreateWithoutPatientInputObjectSchema } from './PaymentUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PaymentUpdateWithoutPatientInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutPatientInputObjectSchema)]),
  create: z.union([z.lazy(() => PaymentCreateWithoutPatientInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const PaymentUpsertWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutPatientInput>;
export const PaymentUpsertWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
