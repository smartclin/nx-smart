import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './BillingWhereUniqueInput.schema';
import { BillingCreateWithoutAppointmentInputObjectSchema as BillingCreateWithoutAppointmentInputObjectSchema } from './BillingCreateWithoutAppointmentInput.schema';
import { BillingUncheckedCreateWithoutAppointmentInputObjectSchema as BillingUncheckedCreateWithoutAppointmentInputObjectSchema } from './BillingUncheckedCreateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BillingCreateWithoutAppointmentInputObjectSchema), z.lazy(() => BillingUncheckedCreateWithoutAppointmentInputObjectSchema)])
}).strict();
export const BillingCreateOrConnectWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.BillingCreateOrConnectWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingCreateOrConnectWithoutAppointmentInput>;
export const BillingCreateOrConnectWithoutAppointmentInputObjectZodSchema = makeSchema();
