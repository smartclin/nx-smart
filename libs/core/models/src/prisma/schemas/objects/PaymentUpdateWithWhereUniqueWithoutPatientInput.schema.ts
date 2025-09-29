import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutPatientInputObjectSchema as PaymentUpdateWithoutPatientInputObjectSchema } from './PaymentUpdateWithoutPatientInput.schema';
import { PaymentUncheckedUpdateWithoutPatientInputObjectSchema as PaymentUncheckedUpdateWithoutPatientInputObjectSchema } from './PaymentUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateWithoutPatientInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict();
export const PaymentUpdateWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutPatientInput>;
export const PaymentUpdateWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
