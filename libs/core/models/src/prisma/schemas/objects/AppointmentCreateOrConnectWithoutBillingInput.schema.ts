import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentCreateWithoutBillingInputObjectSchema as AppointmentCreateWithoutBillingInputObjectSchema } from './AppointmentCreateWithoutBillingInput.schema';
import { AppointmentUncheckedCreateWithoutBillingInputObjectSchema as AppointmentUncheckedCreateWithoutBillingInputObjectSchema } from './AppointmentUncheckedCreateWithoutBillingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AppointmentCreateWithoutBillingInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutBillingInputObjectSchema)])
}).strict();
export const AppointmentCreateOrConnectWithoutBillingInputObjectSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutBillingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateOrConnectWithoutBillingInput>;
export const AppointmentCreateOrConnectWithoutBillingInputObjectZodSchema = makeSchema();
