import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentCreateWithoutPatientInputObjectSchema as PaymentCreateWithoutPatientInputObjectSchema } from './PaymentCreateWithoutPatientInput.schema';
import { PaymentUncheckedCreateWithoutPatientInputObjectSchema as PaymentUncheckedCreateWithoutPatientInputObjectSchema } from './PaymentUncheckedCreateWithoutPatientInput.schema';
import { PaymentCreateOrConnectWithoutPatientInputObjectSchema as PaymentCreateOrConnectWithoutPatientInputObjectSchema } from './PaymentCreateOrConnectWithoutPatientInput.schema';
import { PatientPaymentCreateManyPatientInputEnvelopeObjectSchema as PaymentCreateManyPatientInputEnvelopeObjectSchema } from './PaymentCreateManyPatientInputEnvelope.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutPatientInputObjectSchema), z.lazy(() => PaymentCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PaymentCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => PaymentCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PaymentCreateManyPatientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PaymentUncheckedCreateNestedManyWithoutPatientInputObjectSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutPatientInput>;
export const PaymentUncheckedCreateNestedManyWithoutPatientInputObjectZodSchema = makeSchema();
