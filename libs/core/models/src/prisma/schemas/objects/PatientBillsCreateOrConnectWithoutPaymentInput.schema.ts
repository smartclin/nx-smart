import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './PatientBillsWhereUniqueInput.schema';
import { PatientBillsCreateWithoutPaymentInputObjectSchema as PatientBillsCreateWithoutPaymentInputObjectSchema } from './PatientBillsCreateWithoutPaymentInput.schema';
import { PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema as PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema } from './PatientBillsUncheckedCreateWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientBillsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientBillsCreateWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema)])
}).strict();
export const PatientBillsCreateOrConnectWithoutPaymentInputObjectSchema: z.ZodType<Prisma.PatientBillsCreateOrConnectWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsCreateOrConnectWithoutPaymentInput>;
export const PatientBillsCreateOrConnectWithoutPaymentInputObjectZodSchema = makeSchema();
