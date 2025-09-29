import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutBillingInputObjectSchema as AppointmentCreateWithoutBillingInputObjectSchema } from './AppointmentCreateWithoutBillingInput.schema';
import { AppointmentUncheckedCreateWithoutBillingInputObjectSchema as AppointmentUncheckedCreateWithoutBillingInputObjectSchema } from './AppointmentUncheckedCreateWithoutBillingInput.schema';
import { AppointmentCreateOrConnectWithoutBillingInputObjectSchema as AppointmentCreateOrConnectWithoutBillingInputObjectSchema } from './AppointmentCreateOrConnectWithoutBillingInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutBillingInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutBillingInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutBillingInputObjectSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputObjectSchema).optional()
}).strict();
export const AppointmentCreateNestedOneWithoutBillingInputObjectSchema: z.ZodType<Prisma.AppointmentCreateNestedOneWithoutBillingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateNestedOneWithoutBillingInput>;
export const AppointmentCreateNestedOneWithoutBillingInputObjectZodSchema = makeSchema();
