import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsCreateWithoutPaymentInputObjectSchema as PatientBillsCreateWithoutPaymentInputObjectSchema } from './PatientBillsCreateWithoutPaymentInput.schema';
import { PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema as PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema } from './PatientBillsUncheckedCreateWithoutPaymentInput.schema';
import { PatientBillsCreateOrConnectWithoutPaymentInputObjectSchema as PatientBillsCreateOrConnectWithoutPaymentInputObjectSchema } from './PatientBillsCreateOrConnectWithoutPaymentInput.schema';
import { PatientBillsUpsertWithWhereUniqueWithoutPaymentInputObjectSchema as PatientBillsUpsertWithWhereUniqueWithoutPaymentInputObjectSchema } from './PatientBillsUpsertWithWhereUniqueWithoutPaymentInput.schema';
import { PaymentPatientBillsCreateManyPaymentInputEnvelopeObjectSchema as PatientBillsCreateManyPaymentInputEnvelopeObjectSchema } from './PatientBillsCreateManyPaymentInputEnvelope.schema';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './PatientBillsWhereUniqueInput.schema';
import { PatientBillsUpdateWithWhereUniqueWithoutPaymentInputObjectSchema as PatientBillsUpdateWithWhereUniqueWithoutPaymentInputObjectSchema } from './PatientBillsUpdateWithWhereUniqueWithoutPaymentInput.schema';
import { PatientBillsUpdateManyWithWhereWithoutPaymentInputObjectSchema as PatientBillsUpdateManyWithWhereWithoutPaymentInputObjectSchema } from './PatientBillsUpdateManyWithWhereWithoutPaymentInput.schema';
import { PatientBillsScalarWhereInputObjectSchema as PatientBillsScalarWhereInputObjectSchema } from './PatientBillsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientBillsCreateWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsCreateWithoutPaymentInputObjectSchema).array(), z.lazy(() => PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PatientBillsCreateOrConnectWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsCreateOrConnectWithoutPaymentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PatientBillsUpsertWithWhereUniqueWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsUpsertWithWhereUniqueWithoutPaymentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PatientBillsCreateManyPaymentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PatientBillsWhereUniqueInputObjectSchema), z.lazy(() => PatientBillsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PatientBillsWhereUniqueInputObjectSchema), z.lazy(() => PatientBillsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PatientBillsWhereUniqueInputObjectSchema), z.lazy(() => PatientBillsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PatientBillsWhereUniqueInputObjectSchema), z.lazy(() => PatientBillsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PatientBillsUpdateWithWhereUniqueWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsUpdateWithWhereUniqueWithoutPaymentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PatientBillsUpdateManyWithWhereWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsUpdateManyWithWhereWithoutPaymentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PatientBillsScalarWhereInputObjectSchema), z.lazy(() => PatientBillsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PatientBillsUncheckedUpdateManyWithoutPaymentNestedInputObjectSchema: z.ZodType<Prisma.PatientBillsUncheckedUpdateManyWithoutPaymentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUncheckedUpdateManyWithoutPaymentNestedInput>;
export const PatientBillsUncheckedUpdateManyWithoutPaymentNestedInputObjectZodSchema = makeSchema();
