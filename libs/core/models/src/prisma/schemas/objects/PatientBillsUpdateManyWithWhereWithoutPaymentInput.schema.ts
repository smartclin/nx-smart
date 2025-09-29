import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsScalarWhereInputObjectSchema as PatientBillsScalarWhereInputObjectSchema } from './PatientBillsScalarWhereInput.schema';
import { PatientBillsUpdateManyMutationInputObjectSchema as PatientBillsUpdateManyMutationInputObjectSchema } from './PatientBillsUpdateManyMutationInput.schema';
import { PatientBillsUncheckedUpdateManyWithoutPaymentInputObjectSchema as PatientBillsUncheckedUpdateManyWithoutPaymentInputObjectSchema } from './PatientBillsUncheckedUpdateManyWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientBillsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PatientBillsUpdateManyMutationInputObjectSchema), z.lazy(() => PatientBillsUncheckedUpdateManyWithoutPaymentInputObjectSchema)])
}).strict();
export const PatientBillsUpdateManyWithWhereWithoutPaymentInputObjectSchema: z.ZodType<Prisma.PatientBillsUpdateManyWithWhereWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUpdateManyWithWhereWithoutPaymentInput>;
export const PatientBillsUpdateManyWithWhereWithoutPaymentInputObjectZodSchema = makeSchema();
