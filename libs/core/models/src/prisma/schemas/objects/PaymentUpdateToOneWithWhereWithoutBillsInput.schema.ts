import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './PaymentWhereInput.schema';
import { PaymentUpdateWithoutBillsInputObjectSchema as PaymentUpdateWithoutBillsInputObjectSchema } from './PaymentUpdateWithoutBillsInput.schema';
import { PaymentUncheckedUpdateWithoutBillsInputObjectSchema as PaymentUncheckedUpdateWithoutBillsInputObjectSchema } from './PaymentUncheckedUpdateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PaymentUpdateWithoutBillsInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutBillsInputObjectSchema)])
}).strict();
export const PaymentUpdateToOneWithWhereWithoutBillsInputObjectSchema: z.ZodType<Prisma.PaymentUpdateToOneWithWhereWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateToOneWithWhereWithoutBillsInput>;
export const PaymentUpdateToOneWithWhereWithoutBillsInputObjectZodSchema = makeSchema();
