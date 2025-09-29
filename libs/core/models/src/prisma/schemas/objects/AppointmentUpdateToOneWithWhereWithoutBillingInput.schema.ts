import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema';
import { AppointmentUpdateWithoutBillingInputObjectSchema as AppointmentUpdateWithoutBillingInputObjectSchema } from './AppointmentUpdateWithoutBillingInput.schema';
import { AppointmentUncheckedUpdateWithoutBillingInputObjectSchema as AppointmentUncheckedUpdateWithoutBillingInputObjectSchema } from './AppointmentUncheckedUpdateWithoutBillingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AppointmentUpdateWithoutBillingInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutBillingInputObjectSchema)])
}).strict();
export const AppointmentUpdateToOneWithWhereWithoutBillingInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutBillingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutBillingInput>;
export const AppointmentUpdateToOneWithWhereWithoutBillingInputObjectZodSchema = makeSchema();
