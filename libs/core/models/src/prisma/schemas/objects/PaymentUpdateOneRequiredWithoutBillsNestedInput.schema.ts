import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentCreateWithoutBillsInputObjectSchema as PaymentCreateWithoutBillsInputObjectSchema } from './PaymentCreateWithoutBillsInput.schema';
import { PaymentUncheckedCreateWithoutBillsInputObjectSchema as PaymentUncheckedCreateWithoutBillsInputObjectSchema } from './PaymentUncheckedCreateWithoutBillsInput.schema';
import { PaymentCreateOrConnectWithoutBillsInputObjectSchema as PaymentCreateOrConnectWithoutBillsInputObjectSchema } from './PaymentCreateOrConnectWithoutBillsInput.schema';
import { PaymentUpsertWithoutBillsInputObjectSchema as PaymentUpsertWithoutBillsInputObjectSchema } from './PaymentUpsertWithoutBillsInput.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateToOneWithWhereWithoutBillsInputObjectSchema as PaymentUpdateToOneWithWhereWithoutBillsInputObjectSchema } from './PaymentUpdateToOneWithWhereWithoutBillsInput.schema';
import { PaymentUpdateWithoutBillsInputObjectSchema as PaymentUpdateWithoutBillsInputObjectSchema } from './PaymentUpdateWithoutBillsInput.schema';
import { PaymentUncheckedUpdateWithoutBillsInputObjectSchema as PaymentUncheckedUpdateWithoutBillsInputObjectSchema } from './PaymentUncheckedUpdateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutBillsInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutBillsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PaymentCreateOrConnectWithoutBillsInputObjectSchema).optional(),
  upsert: z.lazy(() => PaymentUpsertWithoutBillsInputObjectSchema).optional(),
  connect: z.lazy(() => PaymentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PaymentUpdateToOneWithWhereWithoutBillsInputObjectSchema), z.lazy(() => PaymentUpdateWithoutBillsInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutBillsInputObjectSchema)]).optional()
}).strict();
export const PaymentUpdateOneRequiredWithoutBillsNestedInputObjectSchema: z.ZodType<Prisma.PaymentUpdateOneRequiredWithoutBillsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateOneRequiredWithoutBillsNestedInput>;
export const PaymentUpdateOneRequiredWithoutBillsNestedInputObjectZodSchema = makeSchema();
