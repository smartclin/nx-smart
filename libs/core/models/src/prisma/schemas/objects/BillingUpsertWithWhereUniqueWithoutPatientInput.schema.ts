import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './BillingWhereUniqueInput.schema';
import { BillingUpdateWithoutPatientInputObjectSchema as BillingUpdateWithoutPatientInputObjectSchema } from './BillingUpdateWithoutPatientInput.schema';
import { BillingUncheckedUpdateWithoutPatientInputObjectSchema as BillingUncheckedUpdateWithoutPatientInputObjectSchema } from './BillingUncheckedUpdateWithoutPatientInput.schema';
import { BillingCreateWithoutPatientInputObjectSchema as BillingCreateWithoutPatientInputObjectSchema } from './BillingCreateWithoutPatientInput.schema';
import { BillingUncheckedCreateWithoutPatientInputObjectSchema as BillingUncheckedCreateWithoutPatientInputObjectSchema } from './BillingUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillingWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BillingUpdateWithoutPatientInputObjectSchema), z.lazy(() => BillingUncheckedUpdateWithoutPatientInputObjectSchema)]),
  create: z.union([z.lazy(() => BillingCreateWithoutPatientInputObjectSchema), z.lazy(() => BillingUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const BillingUpsertWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.BillingUpsertWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingUpsertWithWhereUniqueWithoutPatientInput>;
export const BillingUpsertWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
