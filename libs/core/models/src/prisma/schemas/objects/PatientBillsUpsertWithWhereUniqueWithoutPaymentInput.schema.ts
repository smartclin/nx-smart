import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './PatientBillsWhereUniqueInput.schema';
import { PatientBillsUpdateWithoutPaymentInputObjectSchema as PatientBillsUpdateWithoutPaymentInputObjectSchema } from './PatientBillsUpdateWithoutPaymentInput.schema';
import { PatientBillsUncheckedUpdateWithoutPaymentInputObjectSchema as PatientBillsUncheckedUpdateWithoutPaymentInputObjectSchema } from './PatientBillsUncheckedUpdateWithoutPaymentInput.schema';
import { PatientBillsCreateWithoutPaymentInputObjectSchema as PatientBillsCreateWithoutPaymentInputObjectSchema } from './PatientBillsCreateWithoutPaymentInput.schema';
import { PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema as PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema } from './PatientBillsUncheckedCreateWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientBillsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PatientBillsUpdateWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsUncheckedUpdateWithoutPaymentInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientBillsCreateWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsUncheckedCreateWithoutPaymentInputObjectSchema)])
}).strict();
export const PatientBillsUpsertWithWhereUniqueWithoutPaymentInputObjectSchema: z.ZodType<Prisma.PatientBillsUpsertWithWhereUniqueWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUpsertWithWhereUniqueWithoutPaymentInput>;
export const PatientBillsUpsertWithWhereUniqueWithoutPaymentInputObjectZodSchema = makeSchema();
