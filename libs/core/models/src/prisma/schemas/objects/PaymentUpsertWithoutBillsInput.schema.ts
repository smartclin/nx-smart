import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentUpdateWithoutBillsInputObjectSchema as PaymentUpdateWithoutBillsInputObjectSchema } from './PaymentUpdateWithoutBillsInput.schema';
import { PaymentUncheckedUpdateWithoutBillsInputObjectSchema as PaymentUncheckedUpdateWithoutBillsInputObjectSchema } from './PaymentUncheckedUpdateWithoutBillsInput.schema';
import { PaymentCreateWithoutBillsInputObjectSchema as PaymentCreateWithoutBillsInputObjectSchema } from './PaymentCreateWithoutBillsInput.schema';
import { PaymentUncheckedCreateWithoutBillsInputObjectSchema as PaymentUncheckedCreateWithoutBillsInputObjectSchema } from './PaymentUncheckedCreateWithoutBillsInput.schema';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './PaymentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PaymentUpdateWithoutBillsInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutBillsInputObjectSchema)]),
  create: z.union([z.lazy(() => PaymentCreateWithoutBillsInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutBillsInputObjectSchema)]),
  where: z.lazy(() => PaymentWhereInputObjectSchema).optional()
}).strict();
export const PaymentUpsertWithoutBillsInputObjectSchema: z.ZodType<Prisma.PaymentUpsertWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpsertWithoutBillsInput>;
export const PaymentUpsertWithoutBillsInputObjectZodSchema = makeSchema();
