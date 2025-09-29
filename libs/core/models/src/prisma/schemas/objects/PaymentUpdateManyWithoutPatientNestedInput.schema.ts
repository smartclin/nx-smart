import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentCreateWithoutPatientInputObjectSchema as PaymentCreateWithoutPatientInputObjectSchema } from './PaymentCreateWithoutPatientInput.schema';
import { PaymentUncheckedCreateWithoutPatientInputObjectSchema as PaymentUncheckedCreateWithoutPatientInputObjectSchema } from './PaymentUncheckedCreateWithoutPatientInput.schema';
import { PaymentCreateOrConnectWithoutPatientInputObjectSchema as PaymentCreateOrConnectWithoutPatientInputObjectSchema } from './PaymentCreateOrConnectWithoutPatientInput.schema';
import { PaymentUpsertWithWhereUniqueWithoutPatientInputObjectSchema as PaymentUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './PaymentUpsertWithWhereUniqueWithoutPatientInput.schema';
import { PatientPaymentCreateManyPatientInputEnvelopeObjectSchema as PaymentCreateManyPatientInputEnvelopeObjectSchema } from './PaymentCreateManyPatientInputEnvelope.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithWhereUniqueWithoutPatientInputObjectSchema as PaymentUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './PaymentUpdateWithWhereUniqueWithoutPatientInput.schema';
import { PaymentUpdateManyWithWhereWithoutPatientInputObjectSchema as PaymentUpdateManyWithWhereWithoutPatientInputObjectSchema } from './PaymentUpdateManyWithWhereWithoutPatientInput.schema';
import { PaymentScalarWhereInputObjectSchema as PaymentScalarWhereInputObjectSchema } from './PaymentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutPatientInputObjectSchema), z.lazy(() => PaymentCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PaymentCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => PaymentCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PaymentUpsertWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => PaymentUpsertWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PaymentCreateManyPatientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PaymentUpdateWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => PaymentUpdateWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PaymentUpdateManyWithWhereWithoutPatientInputObjectSchema), z.lazy(() => PaymentUpdateManyWithWhereWithoutPatientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PaymentScalarWhereInputObjectSchema), z.lazy(() => PaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PaymentUpdateManyWithoutPatientNestedInputObjectSchema: z.ZodType<Prisma.PaymentUpdateManyWithoutPatientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateManyWithoutPatientNestedInput>;
export const PaymentUpdateManyWithoutPatientNestedInputObjectZodSchema = makeSchema();
