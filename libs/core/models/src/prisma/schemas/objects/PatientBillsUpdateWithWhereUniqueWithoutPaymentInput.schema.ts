import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './PatientBillsWhereUniqueInput.schema';
import { PatientBillsUpdateWithoutPaymentInputObjectSchema as PatientBillsUpdateWithoutPaymentInputObjectSchema } from './PatientBillsUpdateWithoutPaymentInput.schema';
import { PatientBillsUncheckedUpdateWithoutPaymentInputObjectSchema as PatientBillsUncheckedUpdateWithoutPaymentInputObjectSchema } from './PatientBillsUncheckedUpdateWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientBillsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PatientBillsUpdateWithoutPaymentInputObjectSchema), z.lazy(() => PatientBillsUncheckedUpdateWithoutPaymentInputObjectSchema)])
}).strict();
export const PatientBillsUpdateWithWhereUniqueWithoutPaymentInputObjectSchema: z.ZodType<Prisma.PatientBillsUpdateWithWhereUniqueWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUpdateWithWhereUniqueWithoutPaymentInput>;
export const PatientBillsUpdateWithWhereUniqueWithoutPaymentInputObjectZodSchema = makeSchema();
