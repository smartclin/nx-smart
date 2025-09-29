import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './BillingWhereUniqueInput.schema';
import { BillingUpdateWithoutAppointmentInputObjectSchema as BillingUpdateWithoutAppointmentInputObjectSchema } from './BillingUpdateWithoutAppointmentInput.schema';
import { BillingUncheckedUpdateWithoutAppointmentInputObjectSchema as BillingUncheckedUpdateWithoutAppointmentInputObjectSchema } from './BillingUncheckedUpdateWithoutAppointmentInput.schema';
import { BillingCreateWithoutAppointmentInputObjectSchema as BillingCreateWithoutAppointmentInputObjectSchema } from './BillingCreateWithoutAppointmentInput.schema';
import { BillingUncheckedCreateWithoutAppointmentInputObjectSchema as BillingUncheckedCreateWithoutAppointmentInputObjectSchema } from './BillingUncheckedCreateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillingWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BillingUpdateWithoutAppointmentInputObjectSchema), z.lazy(() => BillingUncheckedUpdateWithoutAppointmentInputObjectSchema)]),
  create: z.union([z.lazy(() => BillingCreateWithoutAppointmentInputObjectSchema), z.lazy(() => BillingUncheckedCreateWithoutAppointmentInputObjectSchema)])
}).strict();
export const BillingUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.BillingUpsertWithWhereUniqueWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingUpsertWithWhereUniqueWithoutAppointmentInput>;
export const BillingUpsertWithWhereUniqueWithoutAppointmentInputObjectZodSchema = makeSchema();
