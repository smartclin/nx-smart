import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentScalarWhereInputObjectSchema as PaymentScalarWhereInputObjectSchema } from './PaymentScalarWhereInput.schema';
import { PaymentUpdateManyMutationInputObjectSchema as PaymentUpdateManyMutationInputObjectSchema } from './PaymentUpdateManyMutationInput.schema';
import { PaymentUncheckedUpdateManyWithoutPatientInputObjectSchema as PaymentUncheckedUpdateManyWithoutPatientInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateManyMutationInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict();
export const PaymentUpdateManyWithWhereWithoutPatientInputObjectSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutPatientInput>;
export const PaymentUpdateManyWithWhereWithoutPatientInputObjectZodSchema = makeSchema();
