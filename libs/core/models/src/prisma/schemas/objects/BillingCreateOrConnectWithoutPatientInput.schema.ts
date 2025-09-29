import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './BillingWhereUniqueInput.schema';
import { BillingCreateWithoutPatientInputObjectSchema as BillingCreateWithoutPatientInputObjectSchema } from './BillingCreateWithoutPatientInput.schema';
import { BillingUncheckedCreateWithoutPatientInputObjectSchema as BillingUncheckedCreateWithoutPatientInputObjectSchema } from './BillingUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BillingCreateWithoutPatientInputObjectSchema), z.lazy(() => BillingUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const BillingCreateOrConnectWithoutPatientInputObjectSchema: z.ZodType<Prisma.BillingCreateOrConnectWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingCreateOrConnectWithoutPatientInput>;
export const BillingCreateOrConnectWithoutPatientInputObjectZodSchema = makeSchema();
