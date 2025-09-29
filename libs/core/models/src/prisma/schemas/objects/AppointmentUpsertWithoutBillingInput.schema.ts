import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentUpdateWithoutBillingInputObjectSchema as AppointmentUpdateWithoutBillingInputObjectSchema } from './AppointmentUpdateWithoutBillingInput.schema';
import { AppointmentUncheckedUpdateWithoutBillingInputObjectSchema as AppointmentUncheckedUpdateWithoutBillingInputObjectSchema } from './AppointmentUncheckedUpdateWithoutBillingInput.schema';
import { AppointmentCreateWithoutBillingInputObjectSchema as AppointmentCreateWithoutBillingInputObjectSchema } from './AppointmentCreateWithoutBillingInput.schema';
import { AppointmentUncheckedCreateWithoutBillingInputObjectSchema as AppointmentUncheckedCreateWithoutBillingInputObjectSchema } from './AppointmentUncheckedCreateWithoutBillingInput.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AppointmentUpdateWithoutBillingInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutBillingInputObjectSchema)]),
  create: z.union([z.lazy(() => AppointmentCreateWithoutBillingInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutBillingInputObjectSchema)]),
  where: z.lazy(() => AppointmentWhereInputObjectSchema).optional()
}).strict();
export const AppointmentUpsertWithoutBillingInputObjectSchema: z.ZodType<Prisma.AppointmentUpsertWithoutBillingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpsertWithoutBillingInput>;
export const AppointmentUpsertWithoutBillingInputObjectZodSchema = makeSchema();
