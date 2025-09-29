import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './BillingWhereUniqueInput.schema';
import { BillingUpdateWithoutPatientInputObjectSchema as BillingUpdateWithoutPatientInputObjectSchema } from './BillingUpdateWithoutPatientInput.schema';
import { BillingUncheckedUpdateWithoutPatientInputObjectSchema as BillingUncheckedUpdateWithoutPatientInputObjectSchema } from './BillingUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillingWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BillingUpdateWithoutPatientInputObjectSchema), z.lazy(() => BillingUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict();
export const BillingUpdateWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.BillingUpdateWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingUpdateWithWhereUniqueWithoutPatientInput>;
export const BillingUpdateWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
