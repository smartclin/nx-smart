import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingScalarWhereInputObjectSchema as BillingScalarWhereInputObjectSchema } from './BillingScalarWhereInput.schema';
import { BillingUpdateManyMutationInputObjectSchema as BillingUpdateManyMutationInputObjectSchema } from './BillingUpdateManyMutationInput.schema';
import { BillingUncheckedUpdateManyWithoutPatientInputObjectSchema as BillingUncheckedUpdateManyWithoutPatientInputObjectSchema } from './BillingUncheckedUpdateManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillingScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BillingUpdateManyMutationInputObjectSchema), z.lazy(() => BillingUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict();
export const BillingUpdateManyWithWhereWithoutPatientInputObjectSchema: z.ZodType<Prisma.BillingUpdateManyWithWhereWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingUpdateManyWithWhereWithoutPatientInput>;
export const BillingUpdateManyWithWhereWithoutPatientInputObjectZodSchema = makeSchema();
