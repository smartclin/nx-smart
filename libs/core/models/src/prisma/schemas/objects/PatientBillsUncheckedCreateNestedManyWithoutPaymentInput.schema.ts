import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsCreateWithoutPaymentInputObjectSchema as PatientBillsCreateWithoutPaymentInputObjectSchema } from './PatientBillsCreateWithoutPaymentInput.schema';
import { PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema as PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema } from './PatientBillsUncheckedCreateWithoutPaymentInput.schema';
import { PatientBillsCreateOrConnectWithoutPaymentInputObjectSchema as PatientBillsCreateOrConnectWithoutPaymentInputObjectSchema } from './PatientBillsCreateOrConnectWithoutPaymentInput.schema';
import { PaymentPatientBillsCreateManyPaymentInputEnvelopeObjectSchema as PatientBillsCreateManyPaymentInputEnvelopeObjectSchema } from './PatientBillsCreateManyPaymentInputEnvelope.schema';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './PatientBillsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientBillsCreateWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsCreateWithoutPaymentInputObjectSchema).array(), z.lazy(() => PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PatientBillsCreateOrConnectWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsCreateOrConnectWithoutPaymentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PatientBillsCreateManyPaymentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PatientBillsWhereUniqueInputObjectSchema), z.lazy(() => PatientBillsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PatientBillsUncheckedCreateNestedManyWithoutPaymentInputObjectSchema: z.ZodType<Prisma.PatientBillsUncheckedCreateNestedManyWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUncheckedCreateNestedManyWithoutPaymentInput>;
export const PatientBillsUncheckedCreateNestedManyWithoutPaymentInputObjectZodSchema = makeSchema();
