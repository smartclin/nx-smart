import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentCreateWithoutBillsInputObjectSchema as PaymentCreateWithoutBillsInputObjectSchema } from './PaymentCreateWithoutBillsInput.schema';
import { PaymentUncheckedCreateWithoutBillsInputObjectSchema as PaymentUncheckedCreateWithoutBillsInputObjectSchema } from './PaymentUncheckedCreateWithoutBillsInput.schema';
import { PaymentCreateOrConnectWithoutBillsInputObjectSchema as PaymentCreateOrConnectWithoutBillsInputObjectSchema } from './PaymentCreateOrConnectWithoutBillsInput.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutBillsInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutBillsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PaymentCreateOrConnectWithoutBillsInputObjectSchema).optional(),
  connect: z.lazy(() => PaymentWhereUniqueInputObjectSchema).optional()
}).strict();
export const PaymentCreateNestedOneWithoutBillsInputObjectSchema: z.ZodType<Prisma.PaymentCreateNestedOneWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateNestedOneWithoutBillsInput>;
export const PaymentCreateNestedOneWithoutBillsInputObjectZodSchema = makeSchema();
