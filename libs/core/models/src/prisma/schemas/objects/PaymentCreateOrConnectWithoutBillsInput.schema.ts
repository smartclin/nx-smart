import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentCreateWithoutBillsInputObjectSchema as PaymentCreateWithoutBillsInputObjectSchema } from './PaymentCreateWithoutBillsInput.schema';
import { PaymentUncheckedCreateWithoutBillsInputObjectSchema as PaymentUncheckedCreateWithoutBillsInputObjectSchema } from './PaymentUncheckedCreateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PaymentCreateWithoutBillsInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutBillsInputObjectSchema)])
}).strict();
export const PaymentCreateOrConnectWithoutBillsInputObjectSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateOrConnectWithoutBillsInput>;
export const PaymentCreateOrConnectWithoutBillsInputObjectZodSchema = makeSchema();
