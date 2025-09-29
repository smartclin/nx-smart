import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingScalarWhereInputObjectSchema as BillingScalarWhereInputObjectSchema } from './BillingScalarWhereInput.schema';
import { BillingUpdateManyMutationInputObjectSchema as BillingUpdateManyMutationInputObjectSchema } from './BillingUpdateManyMutationInput.schema';
import { BillingUncheckedUpdateManyWithoutAppointmentInputObjectSchema as BillingUncheckedUpdateManyWithoutAppointmentInputObjectSchema } from './BillingUncheckedUpdateManyWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillingScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BillingUpdateManyMutationInputObjectSchema), z.lazy(() => BillingUncheckedUpdateManyWithoutAppointmentInputObjectSchema)])
}).strict();
export const BillingUpdateManyWithWhereWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.BillingUpdateManyWithWhereWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingUpdateManyWithWhereWithoutAppointmentInput>;
export const BillingUpdateManyWithWhereWithoutAppointmentInputObjectZodSchema = makeSchema();
