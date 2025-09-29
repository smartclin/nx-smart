import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentCreateWithoutPatientInputObjectSchema as PaymentCreateWithoutPatientInputObjectSchema } from './PaymentCreateWithoutPatientInput.schema';
import { PaymentUncheckedCreateWithoutPatientInputObjectSchema as PaymentUncheckedCreateWithoutPatientInputObjectSchema } from './PaymentUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PaymentCreateWithoutPatientInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const PaymentCreateOrConnectWithoutPatientInputObjectSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateOrConnectWithoutPatientInput>;
export const PaymentCreateOrConnectWithoutPatientInputObjectZodSchema = makeSchema();
