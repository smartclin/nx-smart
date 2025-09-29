import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './BillingWhereUniqueInput.schema';
import { BillingUpdateWithoutAppointmentInputObjectSchema as BillingUpdateWithoutAppointmentInputObjectSchema } from './BillingUpdateWithoutAppointmentInput.schema';
import { BillingUncheckedUpdateWithoutAppointmentInputObjectSchema as BillingUncheckedUpdateWithoutAppointmentInputObjectSchema } from './BillingUncheckedUpdateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillingWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BillingUpdateWithoutAppointmentInputObjectSchema), z.lazy(() => BillingUncheckedUpdateWithoutAppointmentInputObjectSchema)])
}).strict();
export const BillingUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.BillingUpdateWithWhereUniqueWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingUpdateWithWhereUniqueWithoutAppointmentInput>;
export const BillingUpdateWithWhereUniqueWithoutAppointmentInputObjectZodSchema = makeSchema();
